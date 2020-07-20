import React, { useState } from 'react';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';

import api from '../../services/api';

import styles from './styles';

const RegisterUsers = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    async function registerUser() {
        if(password === confirmPassword){
            try {
                const response = await api.post('/users', {
                    name: name,
                    email: email,
                    password: password,
                });
                
                navigation.navigate('Home', {
                    screen: 'Início'
                });
            } catch (err) {
                Alert.alert(`${ err.data.error }`);
            }
        }else{
            Alert.alert('Senha incorreta!');
        }
    };

    function navigateToHome() {
        navigation.navigate('Home', {
        screen: 'Início'
        });
    }

    function navigateToLogon() {
        navigation.navigate('Logon');
    }

    return (
        <View style={styles.container}>
        <StatusBar  
            backgroundColor = "#b3e6ff"  
            barStyle = "dark-content"   
            hidden = {true}    
            translucent = {true}  
        />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cadastro</Text>
            </View>
            <View style={styles.body}>
            <View style={styles.input}>
                <TextInput placeholder='Nome' value={name} style={{flex:1}} onChangeText={setName}></TextInput>
                <Feather name="user"  size={24} color="#aeaeae" />
            </View>
            <View style={styles.input}>
                <TextInput placeholder='Email' value={email} style={{flex:1}} onChangeText={setEmail}></TextInput>
                <Feather name="mail"  size={24} color="#aeaeae" />
            </View>
            <View style={styles.input}>
                <TextInput placeholder='Senha' value={password} style={{flex:1}} onChangeText={setPassword}></TextInput>
                <Feather name="lock"  size={24} color="#aeaeae" />
            </View>
            <View style={styles.input}>
                <TextInput placeholder='Confirmar senha' value={confirmPassword} style={{flex:1}} onChangeText={setConfirmPassword}></TextInput>
                <Feather name="lock"  size={24} color="#aeaeae" />
            </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => registerUser()}
                >
                    <Text style={styles.buttonText}>Registar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigateToLogon()}
                >
                    <Text style={{
                    textAlign: 'center',
                    color: '#aeaeae',
                    padding: 10,
                    }}>
                    Já tem uma conta? <Text style={{color: '#01609D'}}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterUsers;