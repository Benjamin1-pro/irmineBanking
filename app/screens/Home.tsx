import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking, StatusBar, useColorScheme, SafeAreaView, ScrollView } from 'react-native'
import StyleSheets from '../assets/StyleSheets';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Home() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2a418ed',
    };

    return (
        <SafeAreaView style={StyleSheets.wrapper}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView>
                <View style={StyleSheets.homeCard}>
                    <View style={StyleSheets.homeIdentityPart}>
                        <Text style={{ fontWeight: 'bold', fontFamily: 'serif' }}>Benjamin Muthamu Victoire</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Numero ID: 9948573</Text>
                    </View>
                </View>
                <View style={StyleSheets.homeCard}>
                    <View style={StyleSheets.homeSoldePart}>
                        <View style={{ width: '65%' }}>
                            <Text style={{ fontWeight: 'bold', color: '#d2a418ed' }}>
                                <FontAwesome5 name="money-check-alt" size={15} color="#d2a418ed" /> Solde Bancaires</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 12 }}><Text style={{ color: "#d2a418ed" }}>USD</Text>: XXXXXX</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 12 }}><Text style={{ color: "#d2a418ed" }}>CDF</Text>: XXXXXX</Text>
                        </View>
                        <TouchableOpacity style={StyleSheets.homeShowBalanceBtn}>
                            <Text style={{ fontWeight: '700', fontSize: 12 }}>Voir Balance</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={StyleSheets.homeActivitiesCard}>
                    <Text style={StyleSheets.homeActivitiesTitle}>Autres Activités</Text>
                    <View style={StyleSheets.homeActivitiesBlock}>
                        <TouchableOpacity style={StyleSheets.homeActivitiesBtn}>
                            <View style={StyleSheets.homeActivitiesRoundedCircle}>
                                <Octicons name="history" size={24} color="#d2a418ed" />
                            </View>

                            <Text style={{ fontWeight: 'bold' }}>Historique</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={StyleSheets.homeActivitiesBtn}>
                            <View style={StyleSheets.homeActivitiesRoundedCircle}>
                                <Ionicons name="phone-portrait" size={24} color="#d2a418ed" />
                            </View>

                            <Text style={{ fontWeight: 'bold' }}>Achat Unités</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={StyleSheets.homeActivitiesBtn}>
                            <View style={StyleSheets.homeActivitiesRoundedCircle}>
                                <FontAwesome5 name="file-invoice-dollar" size={24} color="#d2a418ed" />
                            </View>

                            <Text style={{ fontWeight: 'bold' }}>Paiements</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={StyleSheets.homeActivitiesBlock}>
                        <TouchableOpacity style={StyleSheets.homeActivitiesBtn}>
                            <View style={StyleSheets.homeActivitiesRoundedCircle}>
                                <MaterialIcons name="save-alt" size={24} color="#d2a418ed" />
                            </View>

                            <Text style={{ fontWeight: 'bold' }}>Depot</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={StyleSheets.homeActivitiesBtn}>
                            <View style={StyleSheets.homeActivitiesRoundedCircle}>
                                <MaterialCommunityIcons name="send-check-outline" size={24} color="#d2a418ed" />
                            </View>

                            <Text style={{ fontWeight: 'bold' }}>Envoie</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={StyleSheets.homeActivitiesBtn}>
                            <View style={StyleSheets.homeActivitiesRoundedCircle}>
                                <FontAwesome5 name="money-check-alt" size={24} color="#d2a418ed" />
                            </View>

                            <Text style={{ fontWeight: 'bold' }}>Retrait</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;