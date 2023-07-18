import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import Home from '../screens/Home';
import SendMoney from '../screens/SendMoney';
import WithdrawMoney from '../screens/WithdrawMoney';
import MoreScreen from '../screens/MoreScreen';

function MainNavigator() {
    const Tabs = createBottomTabNavigator();
    return(
        <Tabs.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                if (route.name === 'Home') {
                   iconName = focused?'home':'home-outline'
                   return <Ionicons name={iconName} size={size} color={color} />;
                }else if (route.name === 'Send') {
                    iconName = focused?'file-send':'file-send-outline'
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                }else if (route.name === 'WithdrawMoney') {
                    iconName = focused?'receipt':'receipt-outline'
                    return <Ionicons name={iconName} size={size} color={color} />;
                }else if (route.name === 'MoreScreen') {
                    return <FontAwesome name="bars" size={size} color={color} />
                }

                
            },
            tabBarActiveTintColor:'#d2a418ed',
            tabBarInactiveTintColor:'#000'
        })}
        >

            <Tabs.Screen name='Home' component={Home} options={()=>({
                title:'Irmine Banking',
                tabBarLabel:'Accueil',
                headerStyle:{backgroundColor:'#d2a418ed'},
                headerTintColor:'#fff',
                headerTitleStyle: {fontWeight: 'bold'},
                headerRight:()=>(
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{marginRight:5}}>
                            <MaterialCommunityIcons name="barcode-scan" size={24} color="#ffffff" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="notifications" size={24} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                )
                
            })}/>
            <Tabs.Screen name='Send' component={SendMoney} options={()=>({
                title:'Envoie Argent',
                tabBarLabel:'Envoie',
                headerStyle:{backgroundColor:'#d2a418ed'},
                headerTintColor:'#fff',
                headerTitleStyle: {fontWeight: 'bold'},
                headerTitleAlign:'center'
                
            })}/>
            <Tabs.Screen name='WithdrawMoney' component={WithdrawMoney} options={()=>({
                title:'Retrait Argent',
                tabBarLabel:'Retrait',
                headerStyle:{backgroundColor:'#d2a418ed'},
                headerTintColor:'#fff',
                headerTitleStyle: {fontWeight: 'bold'},
                headerTitleAlign:'center'
                
            })}/>
            <Tabs.Screen name='MoreScreen' component={MoreScreen} options={()=>({
                title:'Irmine Banking',
                tabBarLabel:'Plus',
                headerStyle:{backgroundColor:'#d2a418ed'},
                headerTintColor:'#fff',
                headerTitleStyle: {fontWeight: 'bold'},
                headerTitleAlign:'center'
            })}/>
        </Tabs.Navigator>
    )
}

export default MainNavigator