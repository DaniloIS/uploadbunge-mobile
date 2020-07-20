import React, { useState, useEffect, Component, ChangeEvent} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, View, FlatList, Image, Text, TextInput, TouchableOpacity, Picker, Alert } from 'react-native';
import DateTimePicker, { Event, DateTimePickerResult } from '@react-native-community/datetimepicker';


import { format } from 'date-fns';
  

import api from '../../../services/api';

import styles from './styles';
import DatePicker from 'react-native-datepicker';

interface Products{
    id: number,
    name: string
}

interface Shelves{
    shelf: string
}

interface Racks{
    rack: number
}

interface DateTime{
    timestamp: number
}

const RegisterItemProducts = () => {
    const [productSelected, setProductSelected] = useState('');
    const [products, setProducts] = useState<Products[]>([]);
    const [lot, setLot] = useState('');


    const date = new Date();
    const formatDate = format(date, 'dd/MM/yyyy');
    
    const [showDateFabrication, setShowDateFabrication] = useState(false);
    const [fabrication_dt, setFabrication_dt] = useState<Date>(date);
    
    const [showDateExpiration, setShowDateExpiration] = useState(false);
    const [expiration_dt, setExpiration_dt] = useState<Date>();

    const [color, setColor] = useState('');
    const [carousel, setCarousel] = useState('');

    const [shelfId, setShelfId] = useState<number>();
    const [shelfSelected, setShelfSelected] = useState('');
    const [shelves, setShelves] = useState<Shelves[]>([]);
    const [rackSelected, setRackSelected] = useState('');
    const [racks, setRacks] = useState<Racks[]>([]);

    const navigation = useNavigation();

    useEffect(() => {
        api.get('/products'
        ).then(response => {
            setProducts(response.data);
        });
    }, []);
    
    useEffect(() => {
        api.get('/shelfs').then(response => {
            setShelves(response.data);
        });
    }, []);
    
    useEffect(() => {
        api.get('/racks', {
            params: {
                shelf: shelfSelected
            }
        }).then(response => {
            setRacks(response.data);
        });
    }, [shelfSelected]);

    useEffect(() => {
        api.get('/shelf', {
            params: {
                shelf: shelfSelected,
                rack: rackSelected
            }
        }).then(response => {
            setShelfId(response.data.id);
        });
    }, [rackSelected]);

    const dateX = date.getDate()+'-'+date.getMonth()+'-'+(date.getFullYear()+1);
    

    function handleSelectDateFabrication() {
        setShowDateFabrication(true);
    }
    
    function onChangeDateFabrication(value?: Date ){

        
        setShowDateFabrication(false);
        const dateFab = new Date(Number(value));
        //setFabrication_dt(format(dateFormat, 'dd/MM/yyyy'));
        setFabrication_dt(dateFab);
        console.log(fabrication_dt);


    }

    function handleSelectDateExpiration() {
        setShowDateExpiration(true);
    }

    function onChangeDateExpiration(value?: Date ){

        setShowDateExpiration(false);
        const dateExp = new Date(Number(value));
        
        setExpiration_dt(dateExp);

        
    }
    
    async function registerProduct() {
        try {
          const response = await api.post('/item_product', {
            shelf_id: shelfId, 
		    product_id: productSelected,
            lot: lot,
            fabrication_dt: fabrication_dt,
            expiration_dt: expiration_dt,
            color: color,
            carousel: carousel,
          });
        
          Alert.alert('Registrado com sucesso!');
          navigation.navigate('Home', {
                screen: "Início"
          });
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
                <View style={styles.inputSelect}>
                    <Picker
                        style={styles.select}
                        selectedValue={productSelected}
                        onValueChange={(itemValue, itemIndex) => setProductSelected(itemValue)}
                    >
                        <Picker.Item label="Nome" value="" />
                        
                        {products.map(product => (
                            <Picker.Item key={product.name} label={product.name} value={product.id} />
                        ))}
                    </Picker>
                </View>
                <TextInput placeholder='Lote' style={styles.input}  value={lot} onChangeText={setLot}></TextInput>

                <TouchableOpacity 
                    onPress={() => handleSelectDateFabrication()} 
                >
                    <TextInput 
                        placeholder="Data de fabricação" 
                        style={styles.input}  
                        value={ format(fabrication_dt, 'dd/MM/yyyy')} 
                        editable={false} 
                    />
                </TouchableOpacity>

                {showDateFabrication && (
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        onChange={ (event, value) => {
                            onChangeDateFabrication(value)
                        }}
                    />
                )}
                
                <TouchableOpacity 
                    onPress={() => handleSelectDateExpiration()} 
                >
                    <TextInput 
                        placeholder="Data de validade" 
                        style={styles.input}  
                        value={ expiration_dt ? format(expiration_dt, 'dd/MM/yyyy') : ''} 
                        editable={false} 
                    />
                </TouchableOpacity>

                {showDateExpiration && (
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        onChange={ (event, value) => {
                            onChangeDateExpiration(value)
                        }}
                    />
                )}

                {/*<DatePicker
                    style={styles.date}
                    date={expiration_dt} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="Data de validade"
                    format="DD-MM-YYYY"
                    minDate={date}
                    maxDate={dateX}
                    onDateChange={handleSelectDateExpiration} 
                />*/}

                <TextInput placeholder='Cor' style={styles.input} value={color} onChangeText={setColor}></TextInput>
                <TextInput placeholder='Carrossel' style={styles.input} value={carousel} onChangeText={setCarousel}></TextInput>

                <View style={styles.inputSelect}>
                <Picker
                    style={styles.select}
                    selectedValue={shelfSelected}
                    onValueChange={(itemValue, itemIndex) => setShelfSelected(itemValue)}
                >
                    <Picker.Item label="Estante" value="" />
                    
                    {shelves.map(shelf => (
                        <Picker.Item key={shelf.shelf} label={shelf.shelf} value={shelf.shelf} />
                    ))}
                </Picker>
                </View>
                <View style={styles.inputSelect}>
                <Picker
                    style={styles.select}
                    selectedValue={rackSelected}
                    onValueChange={(itemValue, itemIndex) => setRackSelected(itemValue)}
                >
                    <Picker.Item label="Prateleira" value="" />
                    {racks.map(rack => (
                        <Picker.Item key={String(rack.rack)} label={String(rack.rack)} value={rack.rack} />
                        
                    ))}
                </Picker>
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

export default RegisterItemProducts;