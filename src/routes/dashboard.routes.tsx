import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';

const AppBottomTabs = createBottomTabNavigator();

import Products from '../pages/Products';
import Register from '../pages/Register';
import User from '../pages/User';
import Notifications from '../pages/Notifications';

const DashboardRoutes = () => {

    return (
        <AppBottomTabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let icon;

              if (route.name === 'Início') {
                icon = 'home';
              } else if (route.name === 'Registrar') {
                icon = 'plus';
              } else if (route.name === 'Notificações') {
                icon = 'bell';
              } else if (route.name === 'Perfil') {
                icon = 'user';
              }

              // You can return any component that you like here!
              return <Feather name={String(icon)} size={size} color={color} />;
            },
          })}
            tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}>
          
              <AppBottomTabs.Screen name="Início" component={Products} />
              <AppBottomTabs.Screen name="Registrar" component={Register} />
              <AppBottomTabs.Screen name="Notificações" component={Notifications} />
              <AppBottomTabs.Screen name="Perfil" component={User} />
          </AppBottomTabs.Navigator>
    );
}

export default DashboardRoutes;