import React from 'react';
import {View,Text,SafeAreaView,StatusBar,useColorScheme} from 'react-native'
import StyleSheets from '../assets/StyleSheets';

function MoreScreen() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2a418ed',
    };

    return(
        <SafeAreaView style={StyleSheets.wrapper}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Text>More Screen</Text>
        </SafeAreaView>
    )
}

export default MoreScreen