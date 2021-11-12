import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';

export default function App() {
  const [state, currentState] = useState({
    isLoading: true,
    isLoggedIn: false 
  });
  isUserLoggedIn().then((response) => {
    currentState({
      isLoading: false,
      isLoggedIn: response
    });
  })
  return(
    <NavigationContainer>
      {state.isLoggedIn ? <HomeComponent/> : <LoginComponent/>}
    </NavigationContainer>
  )
}

const isUserLoggedIn = async () => {
  try {
    const isUserLoggedIn = await AsyncStorage.getItem('isUserLoggedIn')
    if(isUserLoggedIn !== null && isUserLoggedIn === 'true') {
      // value previously stored
      return true
    }
  } catch(e) {
    // error reading value
    return false
  }
  return false
}