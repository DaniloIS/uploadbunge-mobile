import React, { useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import api from '../../services/api';

import styles from './styles';

const Register = () => {
    const navigation = useNavigation();

    function navigationToRegisterItemProducts() {
        navigation.navigate('RegisterItemProducts');
    }

    function navigationToRegisterProducts() {
        navigation.navigate('RegisterProducts');
    }

    function navigationToRegisterShelves() {
        navigation.navigate('RegisterShelves');
    }
    
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Registrar</Text>
        </View>
    
            <View style={{
                flex:1,
                flexDirection: 'row',
                justifyContent: 'center',
                paddingHorizontal: 10
                
            }}>
                <TouchableOpacity 
                    style={{
                        marginTop: 10,
                        shadowOffset: { width: 10, height: 10 },
                        shadowColor: '#000',
                        shadowOpacity: 1,
                        elevation: 10,
                        padding: 5,
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        width: 106,
                        height: 106,
                        flex: 1, 
                        alignItems: 'center', 
                        justifyContent:'center'
                    }}
                    onPress={navigationToRegisterItemProducts}
                >
                    <ImageBackground source={require('../../assets/shelf.png')}  style={styles.image}>
                        <Text style={styles.text}>Item Produto</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.list} onPress={navigationToRegisterProducts}>
                    <ImageBackground source={require('../../assets/shelf.png')}  style={styles.image}>
                        <Text style={styles.text}>Produtos</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.list} onPress={navigationToRegisterShelves}>
                    <ImageBackground source={require('../../assets/shelf.png')}  style={styles.image}>
                        <Text style={styles.text}>Estantes</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        
    
    </View>
    );
}

export default Register;