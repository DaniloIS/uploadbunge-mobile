import React, { useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { StatusBar, View, FlatList, Image, Text, TextInput, TouchableOpacity, Alert, Modal, Picker, Switch } from 'react-native';
import {  format, parseISO } from 'date-fns';

import api from '../../services/api';


import styles from './styles';


interface ItemProducts {
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

interface Shelves{
    shelf: string
}

interface Racks{
    rack: number
}

const Products = () => {
    
    
    const [itemProducts, setItemProducts] = useState<ItemProducts[]>([]);
    const [total, setTotal] = useState(0);

    const [page, setPage] = useState(1);
    const [value, setValue] = useState<Number>();
    const [loading, setLoading] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const [search, setSearch] = useState('');

    const [shelfId, setShelfId] = useState<number>();
    const [shelfSelected, setShelfSelected] = useState('');
    const [shelves, setShelves] = useState<Shelves[]>([]);
    const [rackSelected, setRackSelected] = useState('');
    const [racks, setRacks] = useState<Racks[]>([]);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const navigation = useNavigation();

    
    

    

    
    

    function navigationToDetail(itemProduct: ItemProducts) {
        console.log(itemProduct);
        navigation.navigate('Detail', { itemProduct });
    }
    
    async function loadProducts() {
        if (loading) {
            return;
        }

        if (total > 0 && itemProducts.length === total) {
            return;
        }
        
        setLoading(true);
        
        const response = await api.get('search', {
            params: { page, search, shelf: shelfSelected, rack: rackSelected, expired: isEnabled === true? '1' : '' }
        });
        setValue(1);
        setItemProducts([... itemProducts, ... response.data]);
        
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);

        
    }

    useFocusEffect(
        React.useCallback(() => {
            setTotal(0);
            setLoading(false);
            setPage(1);
            itemProducts.splice(0, itemProducts.length);
            loadProducts();
        }, [])
    );
    
    function searchProduct(){
        setModalVisible(!modalVisible)
        setTotal(0);
        setLoading(false);
        
        setPage(1);
       
        itemProducts.splice(0, itemProducts.length);
        loadProducts();
    }

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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                    <View style={styles.input}>
                        <Feather name="search"  size={24} color="black" style={{padding:10}}/>
                        <TextInput 
                            style={{flex:1}} 
                            placeholder='Pesquisar' 
                            value={search} 
                            onChangeText={setSearch} 
                            returnKeyType='go' 
                            onSubmitEditing={() => searchProduct()}
                        />
                    </View>
                    <TouchableOpacity 
                        style={{width:'15%'}}
                        onPress={() => setModalVisible(true)}
                    >
                        <Feather name="sliders" size={30} color="#707070" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} produtos</Text>.
                </Text>
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
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Filtro</Text>
                            </View>
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
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text>Produtos vencidos:</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#00ff00" }}
                                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                                <TouchableOpacity style={styles.detailsButtonRed} onPress={() => {setModalVisible(!modalVisible)}} >
                                    <Text style={styles.actionText}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.detailsButtonBlue} onPress={() => searchProduct()}>
                                    <Text style={styles.actionText}>Filtar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <FlatList 
                data={itemProducts}
                style={styles.itemProductList}
                keyExtractor={itemProduct => String(itemProduct.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadProducts}
                onEndReachedThreshold={0.2}
                renderItem={({ item: itemProduct }) => (
                    <TouchableOpacity style={styles.itemProduct} onPress={() => navigationToDetail(itemProduct)}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage} source={{ uri: itemProduct.image_url }} />
                        </View>
                        <View>
                            <Text style={styles.itemProductName}>{itemProduct.name}</Text>
                            <View style={styles.itemProductItem}>
                                <Text style={styles.itemProductProperty}>Estante:</Text>
                                <Text style={styles.itemProductValue}>{itemProduct.shelf}</Text>
                                <Text style={styles.itemProductProperty}>Prateleira:</Text>
                                <Text style={styles.itemProductValue}>{itemProduct.rack}</Text>
                            </View>
                            <View style={styles.itemProductItem}>
                                <Text style={styles.itemProductProperty}>F:</Text>
                                <Text style={styles.itemProductValue}>{format(parseISO(itemProduct.fabrication_dt), 'dd/MM/yyyy')}</Text>
                                <Text style={styles.itemProductProperty}>V:</Text>
                                <Text style={styles.itemProductValue}>{format(parseISO(itemProduct.expiration_dt), 'dd/MM/yyyy')}</Text>
                            </View>
                            <View style={styles.itemProductItem}>
                                <Text style={styles.itemProductProperty}>Lote:</Text>
                                <Text style={styles.itemProductValue}>{itemProduct.lot}</Text>
                            </View>
                            <View style={styles.itemProductItem}>
                                <Text style={styles.itemProductProperty}>Carrossel:</Text>
                                <Text style={styles.itemProductValue}>{itemProduct.carousel}</Text>
                                <Text style={styles.itemProductProperty}>Cor:</Text>
                                <Text style={styles.itemProductValue}>{itemProduct.color}</Text>
                            </View>
                            
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Products;