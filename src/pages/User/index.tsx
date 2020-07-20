import React, { useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { View, FlatList, Image, Text, TextInput, TouchableOpacity, Picker, AsyncStorage } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

export default function User() {
    const navigation = useNavigation();

    const [id, setId] = useState('');
    const [name, setName] = useState('');

    async function loadUser() {
        await AsyncStorage.getItem('userId').then(userId => {
            setId(String(userId));
            console.log(userId);
            const response = api.get(`/profile/${userId}`).then(response => {
                setName(response.data[0].name);
            })

        })
    }

    useEffect(() => {
        loadUser();
    }, []);

    async function logoff() {
        AsyncStorage.removeItem('userId');

        navigation.navigate('Logon');
    }
    

    return (
        <View>
            <View style={styles.header}>
                <View style={styles.circle}>
                    <Feather name="user" size={40} color="#fff" />
                </View>
                <View style={{padding:5,}}>
                    <Text style={styles.headerUser}>{name}</Text>
                    <Text style={styles.headerText}>Editar perfil</Text>
                </View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonConfig}>
                    <View style={{flexDirection: 'row',}}>
                        <Feather name="settings" size={20} color="#707070" />
                        <Text style={styles.config}>Configurações</Text>
                    </View>
                    <Feather name="chevron-down" size={20} color="#707070" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonConfig}
                    onPress={logoff}
                >
                    <View style={{flexDirection: 'row',}}>
                        <Text style={styles.config}>Sair</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}