/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useMemo, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Sessions } from './app/screens/auth/AuthContext';
import AuthNavigator from "./app/navigations/AuthNavigator"
import MainNavigator from './app/navigations/MainNavigator';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [state, dispatch] = useReducer((prevState:any, action:any) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true
        };
    }
  },{
    isSignout: true,
  })

  const authContext = useMemo(() => ({
    signIn: async () => { 
      dispatch({type:'SIGN_IN', isSignout:false})
    },
    signOut: async () => { }
  }))

  return (
    <Sessions.Provider value={authContext}>
        <NavigationContainer>
          {state.isSignout?<AuthNavigator />:<MainNavigator />}
          
        </NavigationContainer>
      </Sessions.Provider>
  );
}

export default App;
