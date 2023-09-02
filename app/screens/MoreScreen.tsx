import React from 'react';
import {View,Text,SafeAreaView,StatusBar,useColorScheme, ScrollView,TouchableOpacity} from 'react-native'
import StyleSheets from '../assets/StyleSheets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <ScrollView disableScrollViewPanResponder={true} keyboardShouldPersistTaps="handled">
                <View style={StyleSheets.homeCard}>
                    <TouchableOpacity style={StyleSheets.moreScreenboxes}>
                        <Ionicons name="md-person-sharp" size={18} color='#6c757d' />
                        <Text style={{paddingLeft:10}}>Profile Utilisateur</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleSheets.moreScreenboxes}>
                        <Ionicons name="notifications-circle-outline" size={18} color="#6c757d" />
                        <Text style={{paddingLeft:10}}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleSheets.moreScreenboxes}>
                        <Feather name="help-circle" size={18} color="#6c757d" />
                        <Text style={{paddingLeft:10}}>Aide</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleSheets.moreScreenboxes}>
                        <AntDesign name="profile" size={18} color="#6c757d" />
                        <Text style={{paddingLeft:10}}>Termes & Conditions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleSheets.moreScreenboxes}>
                        <Foundation name="indent-more" size={18} color="#6c757d" />
                        <Text style={{paddingLeft:10}}>A propos de  nous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleSheets.moreScreenboxes}>
                        <MaterialCommunityIcons name="message-star-outline" size={18} color="#6c757d" />
                        <Text style={{paddingLeft:10}}>évaluez nous</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MoreScreen