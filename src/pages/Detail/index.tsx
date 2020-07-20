import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';
import {  format, parseISO } from 'date-fns';

import api from '../../services/api';

import styles from './styles';

interface ItemProduct {
    itemProduct: {
        id: number,
        shelf_id: number,
        product_id: number,
        lot: number,
        fabrication_dt: string,
        expiration_dt: string,
        color: string,
        carousel: string,
        name: string,
        image: string,
        shelf: string,
        rack: number,
        image_url: string
    }
}

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const [modalVisible, setModalVisible] = useState(false);

    const itemProduct = route.params as ItemProduct;

    const [name, setName] = useState(itemProduct.itemProduct.name);
    const [lot, setLot] = useState(String(itemProduct.itemProduct.lot));
    const [fabricationDate, setFabricationDate] = useState(itemProduct.itemProduct.fabrication_dt);
    const [expirationDate, setExpirationDate] = useState(itemProduct.itemProduct.expiration_dt);
    const [color, setColor] = useState(String(itemProduct.itemProduct.color));
    const [shelf, setShelf] = useState(itemProduct.itemProduct.shelf);
    const [rack, setRack] = useState(String(itemProduct.itemProduct.rack));
    
    function navigationBack() {
        navigation.goBack()
    }

    async function handleDeleteProductButton(id: Number) {
        await Alert.alert(
            'Deletar Produto',
            'Tem certeza que deseja deletar este produto permanentemente? ',
            [
              {text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Sim', onPress: () => handleDeleteProduct(id)},
            ],
            { cancelable: false }
        )
    }

    async function handleDeleteProduct(id: Number) {
        try {
            await api.delete(`item_product/${id}`, {});

            //setProducts(products.filter(product => product.id !== id));
            //Alert.alert(id.toString());
                //Setting up global variable
                //global.MyVar = id;
              
            navigation.navigate('Home', {
                screen: 'Início'
            });
        } catch (err) {
            alert('Erro ao deletar produto, tente novamente.');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="chevron-left" size={28} color="#01609D" />
                </TouchableOpacity>
            </View>

            <View style={styles.product}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'}}
                >
                    <Image style={styles.image} source={{ uri: itemProduct.itemProduct.image_url }} />
                </View>
            <View>
                <Text style={styles.productName}>{itemProduct.itemProduct.name}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.productProperty}>Estante:</Text>
                    <Text style={styles.productValue}>{itemProduct.itemProduct.shelf}</Text>
                    <Text style={styles.productProperty}>Prateleira:</Text>
                    <Text style={styles.productValue}>{itemProduct.itemProduct.rack}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.productProperty}>F:</Text>
                    <Text style={styles.productValue}>{format(parseISO(itemProduct.itemProduct.fabrication_dt), 'dd/MM/yyyy')}</Text>
                    <Text style={styles.productProperty}>V:</Text>
                    <Text style={styles.productValue}>{format(parseISO(itemProduct.itemProduct.expiration_dt), 'dd/MM/yyyy')}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.productProperty}>Lote:</Text>
                    <Text style={styles.productValue}>{itemProduct.itemProduct.lot}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.productProperty}>Carrossel:</Text>
                    <Text style={styles.productValue}>{itemProduct.itemProduct.carousel}</Text>
                    <Text style={styles.productProperty}>Cor:</Text>
                    <Text style={styles.productValue}>{itemProduct.itemProduct.color}</Text>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredModal}>
                        <View style={styles.modal}>
                            <View style={styles.viewInput}>
                                <Text style={styles.productProperty}>Nome:</Text>
                                <TextInput style={styles.input} value={name} onChangeText={setName}/>
                            </View>

                            <View style={styles.viewInput}>
                                <Text style={styles.productProperty}>Lote:</Text>
                                <TextInput style={styles.input} value={lot} onChangeText={setLot}/>
                            </View>

                            <View style={styles.viewInput}>
                                <Text style={styles.productProperty}>Fabricação:</Text>
                                <TextInput style={styles.input} value={fabricationDate} onChangeText={setFabricationDate}/>
                            </View>
                            
                            <View style={styles.viewInput}>
                                <Text style={styles.productProperty}>Validade:</Text>
                                <TextInput style={styles.input} value={expirationDate} onChangeText={setExpirationDate}/>
                            </View>

                            <View style={styles.viewInput}>
                                <Text style={styles.productProperty}>Cor:</Text>
                                <TextInput style={styles.input} value={color} onChangeText={setColor}/>
                            </View>

                            <View style={styles.viewInput}>
                                <Text style={styles.productProperty}>Estante:</Text>
                                <TextInput style={styles.input} value={shelf} onChangeText={setShelf}/>
                            </View>

                            <View style={styles.viewInput}>
                                <Text style={styles.productProperty}>Prateleira:</Text>
                                <TextInput style={styles.input} value={rack} onChangeText={setRack}/>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TouchableOpacity style={styles.detailsButtonRed} onPress={() => {setModalVisible(!modalVisible)}} >
                                    <Text style={styles.actionText}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.detailsButtonBlue} onPress={() =>{}}>
                                    <Text style={styles.actionText}>Enviar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.detailsButtonBlue} onPress={() =>setModalVisible(true)}>
                        <Text style={styles.actionText}><Feather  name="edit" size={16} color="#fff" /></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.detailsButtonRed} onPress={() => handleDeleteProductButton(itemProduct.itemProduct.id)} >
                        <Text style={styles.actionText}><Feather name="trash-2" size={16} color="#fff" /></Text>
                    </TouchableOpacity>
            </View>
            </View>
            </View>
        </View>
    );
}