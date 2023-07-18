import React ,{useState} from 'react';
import {View,Text,SafeAreaView,StatusBar,useColorScheme,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import StyleSheets from '../assets/StyleSheets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';

function SendMoney() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2a418ed',
    };

    const [isEnabled, setIsEnabled] = useState(false);
    const [typeProduct, setTypeProduct] = useState("USD");
    const [sendPersonVisible,showSendPerson] = useState(true);
    const [bankFormVisible,showBankForm] = useState(false);

    const hideBankPage = () => {
        sendPersonVisible?showSendPerson(false):showSendPerson(true)
        showBankForm(false)
    }

    return(
        <SafeAreaView style={StyleSheets.wrapper}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView disableScrollViewPanResponder={true} keyboardShouldPersistTaps="handled">
                <Text>Envoie d'argent à :</Text>
                <View style={[StyleSheets.homeCard,{flexDirection:'row'}]}>
                    <TouchableOpacity style={[StyleSheets.sendMoneyPersonBtn,{borderRightWidth:1,borderColor:'#02020221'}]} onPress={() => hideBankPage()}>
                        <Ionicons name="md-person-sharp" size={24} color={sendPersonVisible?'#d2a418ed':'#6c757d'} />
                        <Text style={{color:sendPersonVisible?'#d2a418ed':'#6c757d'}}>une personne</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleSheets.sendMoneyPersonBtn} onPress={() => hideBankPage()}>
                        <FontAwesome name="bank" size={24} color={sendPersonVisible?'#6c757d':'#d2a418ed'} />
                        <Text style={{color:sendPersonVisible?'#6c757d':'#d2a418ed'}}>une banque</Text>
                    </TouchableOpacity>
                </View>

                    {/* For person */}
                    {
                        sendPersonVisible?
                            <View style={[StyleSheets.homeCard,{marginTop:25,marginBottom:20}]}>
                                <View style={[StyleSheets.homeCard,{flexDirection:'row'}]}>
                                    <TouchableOpacity style={[StyleSheets.sendMoneyPersonBtn,{borderRightWidth:1,borderBottomWidth:3,borderColor:'#d2a418ed'}]}>
                                        <Text>Local</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[StyleSheets.sendMoneyPersonBtn]}>
                                        <Text>Internationnal</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={StyleSheets.sendMoneyreceipientBox}>
                                    <Text style={{fontWeight:'bold'}}>Details du receveur</Text>
            
                                    <View style={StyleSheets.formGroup}>
                                        <Text style={StyleSheets.label}>Nom ou Numero du receveur:</Text>
                                        <TextInput
                                            style={StyleSheets.input}
                                            underlineColorAndroid="transparent"
                                            placeholder='Nom ou Numero du receveur'
                                        />
                                    </View>
                                    <View style={StyleSheets.formGroup}>
                                        <Text style={StyleSheets.label}>Selectionner un devise</Text>
                                        <View style={StyleSheets.selectForm}>
                                            <Picker mode="dropdown" selectedValue={typeProduct}>
                                                <Picker.Item style={{fontSize:14}} label="USD" value="USD" />
                                                <Picker.Item style={{fontSize:14}} label="CDF" value="CDF" />
                                            </Picker>
                                        </View>
                                    </View>
                                    <View style={[StyleSheets.formGroup]}>
                                        <Text style={StyleSheets.label}>Entrer un montant</Text>
                                        <View style={[StyleSheets.label,{flexDirection:'row',alignItems:'center'}]}>
                                            <Text style={{color:'#d2a418ed',fontWeight:'bold'}}>USD</Text>
                                            <TextInput
                                                style={StyleSheets.sendMoneyinput}
                                                underlineColorAndroid="transparent"
                                                placeholder='xxxxx'
                                                keyboardType='numeric'
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity style={[StyleSheets.loginSendBtn,{alignItems:'center'}]}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Envoyer</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>:
                            // For Banks
                            
                                bankFormVisible?
                                // Show form
                                <View style={StyleSheets.homeCard}>
                                    <Text style={{fontWeight:'bold'}}>Details de la banque</Text>
                                    <View style={StyleSheets.formGroup}>
                                        <Text style={StyleSheets.label}>Envoyer de l'argent à</Text>
                                        <TextInput
                                            style={StyleSheets.input}
                                            underlineColorAndroid="transparent"
                                            placeholder='Nom ou Numero du receveur'
                                            value='EQUITY'
                                            editable={false}
                                        />
                                    </View>
                                    <View style={StyleSheets.formGroup}>
                                        <Text style={StyleSheets.label}>Nom du beneficiaire</Text>
                                        <TextInput
                                            style={StyleSheets.input}
                                            underlineColorAndroid="transparent"
                                        />
                                    </View>
                                    <View style={StyleSheets.formGroup}>
                                        <Text style={StyleSheets.label}>Numero Telephone du beneficiaire</Text>
                                        <TextInput
                                            style={StyleSheets.input}
                                            underlineColorAndroid="transparent"
                                        />
                                    </View>
                                    <View style={StyleSheets.formGroup}>
                                        <Text style={StyleSheets.label}>Numero compte du beneficiaire</Text>
                                        <TextInput
                                            style={StyleSheets.input}
                                            underlineColorAndroid="transparent"
                                        />
                                    </View>
                                    <View style={StyleSheets.formGroup}>
                                        <Text style={StyleSheets.label}>Confirmer Numero du compte</Text>
                                        <TextInput
                                            style={StyleSheets.input}
                                            underlineColorAndroid="transparent"
                                        />
                                    </View>
                                    <View style={StyleSheets.formGroup}>
                                        <Text style={StyleSheets.label}>Commentaire (Optionnel)</Text>
                                        <TextInput
                                            style={[StyleSheets.input,{textAlignVertical:"top"}]}
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
                                            onPress={()=> showBankForm(false)}
                                        >
                                            <Text style={{ fontSize: 13, color: "#fff",fontWeight:'bold' }}>Annuler</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={StyleSheets.buttonPrimary}
                                            onPress={() => {}}
                                        >
                                            <Text style={{ fontSize: 13, color: "#fff",fontWeight:'bold' }}>Envoyer</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>:
                                // BANK LIST
                                <View style={[StyleSheets.homeCard,{marginTop:25,marginBottom:20}]}>
                                    <Text style={{fontWeight:'bold'}}>Liste des banques</Text>
                                    <View style={{flexDirection:'row'}}>
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

export default SendMoney