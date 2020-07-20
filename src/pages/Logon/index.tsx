import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api  from '../../services/api';

import styles from './styles';

const Logon = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  
  useEffect(() => {
    AsyncStorage.getItem('userId').then(userId => {
      if(userId) {
        navigation.navigate('Home', { 
          screen: "Início"
        });
      }
    })

  }, []);

  async function navigateToHome() {
    const response = await api.post('/profile', {
      email,
      password
    });

    const id = response.data[0].id;
    //const name = response.data[0].name;
    
    //console.log(id);
    await AsyncStorage.setItem('userId', String(id));
    
    navigation.navigate('Home', { 
      screen: "Início"
    });
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPassword');
  }

  function navigateToRegisterUsers() {
    navigation.navigate('RegisterUsers');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
      </View>
      
      <View style={styles.body}>

        <View style={styles.input}>
          <TextInput autoCapitalize="none" placeholder='Email' value={email} style={{flex:1}} onChangeText={setEmail}></TextInput>
          <Feather name="mail"  size={24} color="#aeaeae" />
        </View>

        <View style={styles.input}>
          <TextInput  secureTextEntry={true} placeholder='Senha'  value={password} style={{flex:1}} onChangeText={setPassword}></TextInput>
          <Feather name="lock"  size={24} color="#aeaeae" />
        </View>

        <TouchableOpacity
            onPress={() => navigateToForgotPassword()}
        >
            <Text style={{
              textAlign: 'right',
              color: '#aeaeae',
              padding: 10,
            }}>
                Esqueceu a senha?
            </Text>
        </TouchableOpacity>
          
          <TouchableOpacity 
              style={styles.button}
              onPress={() => navigateToHome()}
          >
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => navigateToRegisterUsers()}
          >
              <Text style={{
                textAlign: 'center',
                color: '#aeaeae',
                padding: 10,
              }}>
                Criar nova conta
              </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default Logon;