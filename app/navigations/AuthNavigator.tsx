/**
 * @format
 */
import React from 'react';
import SplashScreen from '../screens/auth/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import OtpConfirmationScreen from '../screens/auth/OtpConfirmationScreen';

const Stack = createNativeStackNavigator()

function AuthNavigator(){
    return(
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Login' component={LoginScreen} options={()=>({
                title:'Agency Banking',
                headerStyle:{backgroundColor:'#d2a418ed'},
                headerTintColor:'#fff',
                headerTitleStyle: {fontWeight: 'bold'},
                headerTitleAlign:'center'
                
            })}/>
            <Stack.Screen name='OtpConfirmationScreen' component={OtpConfirmationScreen} options={()=>({
                title:'Agency Banking',
                headerStyle:{backgroundColor:'#d2a418ed'},
                headerTintColor:'#fff',
                headerTitleStyle: {fontWeight: 'bold'},
                headerTitleAlign:'center'
                
            })}/>
            
        </Stack.Navigator>
    )
}

export default AuthNavigator;