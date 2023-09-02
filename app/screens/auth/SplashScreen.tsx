/**
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    useColorScheme,
    StatusBar,
    ActivityIndicator
  } from 'react-native';
  import StyleSheets from '../../assets/StyleSheets';


function SplashScreen({navigation}): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2a418ed',
    };

    const [animating, setAnimating] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setAnimating(false);
            navigation.replace('Login');
        },5000)
    })

    return(
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <View>
                <Text style={[StyleSheets.splashScreenTitle]}>Agency Banking...</Text>
                <ActivityIndicator 
                    animating={animating}
                    color="#FFFFFF"
                    size="large"
                    style={StyleSheets.activityIndicator}
                />
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen;