import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Logon from './pages/Logon';
import RegisterUsers from './pages/RegisterUsers';
import ForgotPassword from './pages/ForgotPassword';
import Detail from './pages/Detail';
import RegisterItemProducts from './pages/Register/RegisterItemProducts';
import RegisterProducts from './pages/Register/RegisterProducts';
import RegisterShelves from './pages/Register/RegisterShelves';
import DashboardRoutes from './routes/dashboard.routes';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#f0f0f5'
                    }
                }}
            >

                <AppStack.Screen 
                    name="Logon" 
                    component={Logon} 
                />

                <AppStack.Screen 
                    name="RegisterUsers" 
                    component={RegisterUsers} 
                />
                
                <AppStack.Screen 
                    name="ForgotPassword" 
                    component={ForgotPassword} 
                />
                
                <AppStack.Screen 
                    name="Home" 
                    component={DashboardRoutes} 
                />

                <AppStack.Screen 
                    name="Detail" 
                    component={Detail} 
                />

                <AppStack.Screen 
                    name="RegisterItemProducts" 
                    component={RegisterItemProducts} 
                />

                <AppStack.Screen 
                    name="RegisterProducts" 
                    component={RegisterProducts} 
                />

                <AppStack.Screen 
                    name="RegisterShelves" 
                    component={RegisterShelves} 
                />

            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;