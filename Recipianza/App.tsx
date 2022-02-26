import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import LoginComponent from './components/LoginComponent';
import AfterLoginComponent from './navigation/AfterLoginComponent';
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
      {state.isLoggedIn ? <AfterLoginComponent/> : <LoginComponent/>}
    </NavigationContainer>
  )
}