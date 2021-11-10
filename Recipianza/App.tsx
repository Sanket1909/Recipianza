import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';

export default function App() {
  return (
    <NavigationContainer>
      {/* <LoginComponent/> */}
      <HomeComponent/>
    </NavigationContainer>
    
  );
}

