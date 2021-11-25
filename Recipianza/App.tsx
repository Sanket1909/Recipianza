import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import UserUtil from './Utils/UserUtil';

export default function App() {
  const [state, currentState] = useState({
    isLoading: true,
    isLoggedIn: false 
  });
  UserUtil.isUserLoggedIn().then((response) => {
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