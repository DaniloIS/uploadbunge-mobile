import React, { useState, useEffect, Component, ChangeEvent} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, View, Image, Text, TextInput, TouchableOpacity, Alert, AsyncStorage, Button  } from 'react-native';

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import api from '../../../services/api';

import styles from './styles';

interface Img {
  height: number,
  type: string,
  uri: string,
  width: number,
}

const RegisterProducts = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [fileImage, setFileImage] = useState<File>();
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
    
    /*const [photo, setPhoto] = useState(null);
    
    
      function handleChoosePhoto() {
        const options = {
          noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            console.log(response);
          }
        });
      };*/

      

      async function imagePickerCall() {
        if (Constants.platform?.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    
          if (status !== "granted") {
            alert("Nós precisamos dessa permissão.");
            return;
          }
        }
    
        const data = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images
        });
    
        if (data.cancelled) {
          return;
        }
    
        if (!data.uri) {
          return;
        }
        console.log(data);
        const parsedItems = String(data.uri)
            .split('/')
            .map(item => String(item.trim()));
        console.log(parsedItems);

        //setFileImage(File(data));
        setImage(data.uri);
      }

    async function registerProduct() {

      const product = new FormData();

      product.append('name', name);

      const img = {file: {
        path: image,
        mimetype: 'image/png',
      }}

      if(image) {
        product.append('image', image);
      }
        console.log(product);
        try {
            const response = await api.post('/products', product);
        
            Alert.alert('Registrado com sucesso!');
            navigation.navigate('Home');
        } catch (err) {
            Alert.alert('Erro!');
        }
    };
    return (
        
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Registro de Produto</Text>
            </View>
            <View style={styles.container}>
                <TextInput placeholder='Nome' style={styles.input} value={name} onChangeText={setName}></TextInput>
                
                <View style={styles.imageSelect}>
                  {image ? 
                    (<Image
                        source={{uri: image}}
                        style={styles.image}
                    />) :
                    (<Image
                      source={require('../../../assets/placeholder-image.png')}
                      style={styles.image}
                    />) 
                  }
                
                  <TouchableOpacity 
                      onPress={imagePickerCall}
                  >
                      <Text>Escolher imagem</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => registerProduct()}
                >
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterProducts;