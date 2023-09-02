import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, useColorScheme, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import StyleSheets from '../assets/StyleSheets';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function WithdrawMoney() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2a418ed',
    };

    const [isEnabled, setIsEnabled] = useState(false);
    const [typeProduct, setTypeProduct] = useState("USD");
    const [sendPersonVisible, showSendPerson] = useState(true);
    const [bankFormVisible, showBankForm] = useState(false);

    const hideBankPage = () => {
        sendPersonVisible ? showSendPerson(false) : showSendPerson(true)
        showBankForm(false)
    }

    return (
        <SafeAreaView style={StyleSheets.wrapper}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView disableScrollViewPanResponder={true} keyboardShouldPersistTaps="handled">
                <Text>Retirer de l'argent de :</Text>
                <View style={[StyleSheets.homeCard, { flexDirection: 'row' }]}>
                    <TouchableOpacity style={StyleSheets.sendMoneyPersonBtn} onPress={() => hideBankPage()}>
                        <FontAwesome name="bank" size={24} color={sendPersonVisible ? '#6c757d' : '#d2a418ed'} />
                        <Text style={{ color: sendPersonVisible ? '#6c757d' : '#d2a418ed' }}>la banque</Text>
                    </TouchableOpacity>
                </View>

                {/* For person */}
                {
                    sendPersonVisible ?
                        "" :
                        // For Banks

                        bankFormVisible ?
                            // Show form
                            <View style={StyleSheets.homeCard}>
                                <Text style={{ fontWeight: 'bold' }}>Details de la banque</Text>
                                <View style={StyleSheets.formGroup}>
                                    <Text style={StyleSheets.label}>Retirer de l'argent de</Text>
                                    <TextInput
                                        style={StyleSheets.input}
                                        underlineColorAndroid="transparent"
                                        placeholder='Nom ou Numero du receveur'
                                        value='EQUITY'
                                        editable={false}
                                    />
                                </View>
                                <View style={StyleSheets.formGroup}>
                                    <Text style={StyleSheets.label}>Commentaire (Optionnel)</Text>
                                    <TextInput
                                        style={[StyleSheets.input, { textAlignVertical: "top" }]}
                                        underlineColorAndroid="transparent"
                                        multiline={true}
                                        numberOfLines={4}
                                    />
                                </View>
                                <View style={StyleSheets.formGroup}>
                                    <Text style={StyleSheets.label}>Entrer le montant (en USD)</Text>
                                    <TextInput
                                        style={StyleSheets.input}
                                        underlineColorAndroid="transparent"
                                        keyboardType='numeric'
                                    />
                                </View>
                                <View style={StyleSheets.buttonGroup}>
                                    <TouchableOpacity
                                        style={StyleSheets.buttonDanger}
                                        onPress={() => showBankForm(false)}
                                    >
                                        <Text style={{ fontSize: 13, color: "#fff", fontWeight: 'bold' }}>Annuler</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={StyleSheets.buttonPrimary}
                                        onPress={() => { }}
                                    >
                                        <Text style={{ fontSize: 13, color: "#fff", fontWeight: 'bold' }}>Retirer</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> :
                            // BANK LIST
                            <View style={[StyleSheets.homeCard, { marginTop: 25, marginBottom: 20 }]}>
                                <Text style={{ fontWeight: 'bold' }}>Liste des banques</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={StyleSheets.banksBlocs} onPress={() => showBankForm(true)}>
                                        <FontAwesome name="bank" size={24} color='#6c757d' />
                                        <Text>Equity</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={StyleSheets.banksBlocs} onPress={() => showBankForm(true)}>
                                        <FontAwesome name="bank" size={24} color='#6c757d' />
                                        <Text>RAWBANK</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={StyleSheets.banksBlocs} onPress={() => showBankForm(true)}>
                                        <FontAwesome name="bank" size={24} color='#6c757d' />
                                        <Text>Ecobank</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                }

            </ScrollView>
        </SafeAreaView>
    )
}

export default WithdrawMoney