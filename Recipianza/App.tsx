import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';

export default function App() {
  if(true){
    return (
      <NavigationContainer>
         <HomeComponent/>
      </NavigationContainer>
    );
  }else{
    return (
      <NavigationContainer>
         <LoginComponent/>
      </NavigationContainer>
    );
  }
}

// const getData = async () => {
// try {
//   const value = await AsyncStorage.getItem('isUserLoggedIn')
//   if(value !== null) {
//     // value previously stored
//     alert(value)
//     return true
//   }
// } catch(e) {
//   // error reading value
//   return false
// }
// return false
// }

