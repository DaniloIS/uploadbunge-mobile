import React, { useState, useEffect, Component, ChangeEvent} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, View, FlatList, Image, Text, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format } from 'date-fns-tz';


import api from '../../../services/api';

import styles from './styles';
import DatePicker from 'react-native-datepicker';




const RegisterShelves = () => {
    const [shelf, setShelf] = useState('');
    const [rack, setRack] = useState('');
    const [id, setId] = useState('');

    const navigation = useNavigation();

    async function loadUser() {
        await AsyncStorage.getItem('userId').then(userId => {
            setId(String(userId));
            

        })
    }

    useEffect(() => {
        loadUser();
    }, []);
    console.log(id);
    async function registerShelf() {
        
        try {
            const response = await api.post('/shelves', {
                shelf: shelf,
                rack: 1
            }, {
                headers:{
                    Authorization: id,
                },
                    
            });
        

            for(var i = 2 ; i <= Number(rack); i++){
                try {
                    const response = await api.post('/shelves', {
                            shelf: shelf,
                            rack: i,
                        }, 
                        {
                        headers:{
                        Authorization: id,
                        }
                    });
                
                } catch (err) {
                    Alert.alert('Erro!');
                }
            }
            Alert.alert('Registrado com sucesso!');
            navigation.navigate('Home');
        } catch (err) {
            Alert.alert('Erro!');
        }
    };

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Registro de Estante</Text>
            </View>
            <View style={styles.container}>
                <TextInput placeholder='Digite uma letra do alfabeto' style={styles.input} value={shelf} onChangeText={setShelf}></TextInput>
                <TextInput placeholder='Digite o número de prateleiras' style={styles.input} value={rack} onChangeText={setRack}></TextInput>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => registerShelf()}
                >
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterShelves;