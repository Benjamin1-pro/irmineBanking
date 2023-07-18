/**
 * @format
 */

import React, { useEffect, useState } from 'react';
import {View,Text,TextInput,StatusBar,useColorScheme } from 'react-native'
import StyleSheets from '../../assets/StyleSheets';
import { Sessions } from './AuthContext';


function OtpConfirmationScreen({navigation}) {

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2a418ed',
    };

    const { signIn } = React.useContext(Sessions);
    
    const validateOtpFn = () => {
        signIn();
    }

    return (
        <View style={StyleSheets.wrapper}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={StyleSheets.loginformGroup}>
                <Text style={StyleSheets.loginScreenFirstLine}>Ecrivez le code OTP Envoyé a ce numero 0987654321</Text>
                <View style={{justifyContent:"center",alignItems:'center',}}>
                    <View style={StyleSheets.otpInputGroup}>
                        <TextInput style={StyleSheets.optInput} underlineColorAndroid="transparent" keyboardType='numeric' focusable={true} autoFocus={true} maxLength={1} onChangeText={(val) => validateOtpFn()}/>
                        <TextInput style={StyleSheets.optInput} underlineColorAndroid="transparent" keyboardType='numeric' focusable={true} autoFocus={true} maxLength={1}/>
                        <TextInput style={StyleSheets.optInput} underlineColorAndroid="transparent" keyboardType='numeric' focusable={true} autoFocus={true} maxLength={1}/>
                        <TextInput style={StyleSheets.optInput} underlineColorAndroid="transparent" keyboardType='numeric' focusable={true} autoFocus={true} maxLength={1}/>
                    </View>
                    <Text style={[StyleSheets.loginConditions,{color:'#000'}]} onPress={()=>{}}>Envoyer de nouveau</Text>
                </View>
            </View>
        </View>
    )
}

export default OtpConfirmationScreen;