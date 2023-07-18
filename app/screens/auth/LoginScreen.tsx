/**
 * @format
 */

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking, StatusBar, useColorScheme } from 'react-native'
import StyleSheets from '../../assets/StyleSheets';


function LoginScreen({ navigation }) {

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2a418ed',
    };

    const getOtpFn = () => {
        navigation.replace('OtpConfirmationScreen');
    }

    return (
        <View style={StyleSheets.wrapper}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={StyleSheets.loginformGroup}>
                <Text style={StyleSheets.loginScreenFirstLine}>Ecrivez votre numero de telephone puis cliquez sur <Text style={{ fontWeight: 'bold' }}>Envoyer</Text> pour continuer</Text>
                <View style={{ justifyContent: "center", alignItems: 'center', }}>
                    <View style={StyleSheets.LoginPhoneNumberGroup}>
                        <Text>+243</Text>
                        <TextInput style={StyleSheets.Logininput} underlineColorAndroid="transparent" keyboardType='numeric' focusable={true} autoFocus={true} maxLength={9} />
                    </View>
                    <Text style={StyleSheets.loginConditions}>En continuant, j'accepte <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('http://google.com')}>les termes et conditions</Text>.</Text>
                    <TouchableOpacity style={StyleSheets.loginSendBtn} onPress={() => getOtpFn()}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Envoyer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen;