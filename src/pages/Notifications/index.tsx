import React, { useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

interface Notifications{
    id: number,
    title: string,
    description: string,
    date: number,
    viewed: number,
    item_product_id: string
}

export default function Notifications() {
    const [notifications, setNotifications] = useState<Notifications[]>([]);

    useEffect(() => {
        api.get('/notifications'
        ).then(response => {
            setNotifications(response.data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Notificações</Text>
            </View>

            <FlatList 
                data={notifications}
                style={styles.productList}
                keyExtractor={notification => String(notification.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: notification }) => (
                    <View style={styles.product}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage} source={require('../../assets/logo.png')} />
                        </View>
                        <View>
                        <Text style={styles.notificationTitle}>{notification.title}</Text>
                        <Text style={styles.notificationDescription}>{notification.description}</Text>
                        
                        </View>
                    </View>
                )}
            />

        </View>
    );
}