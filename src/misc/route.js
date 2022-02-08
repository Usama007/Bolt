import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Login from '../screens/login';
import Welcome from '../screens/welcome';
import Otp from '../screens/otp';
import Product from '../screens/product';
import CheckOut from '../screens/checkout';

const Stack = createNativeStackNavigator();


const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
                <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
                <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="Otp" options={{ headerShown: false }} component={Otp} />
                <Stack.Screen name="Product" options={{ headerShown: false }} component={Product} />
                <Stack.Screen name="CheckOut" options={{ headerShown: false }} component={CheckOut} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Route;
