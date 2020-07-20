import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    function navigationBack() {
      navigation.goBack()
    }

  function navigateToHome() {
    navigation.navigate('Home', {
      screen: 'Início'
    });
  }

  function navigateToRegisterUsers() {
    navigation.navigate('RegisterUsers');
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
                style={{ flex: 1 }}
                  onPress={() => navigationBack()}
              >
            <Feather name="chevron-left" size={28} color="#fff" style={{width:'10%'}} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Esqueceu senha</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.input}>
            <TextInput placeholder='Email' value={email} style={{flex:1}} onChangeText={setEmail} />
            <Feather name="mail"  size={24} color="#fff" />
          </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => {}}
            >
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default ForgotPassword;