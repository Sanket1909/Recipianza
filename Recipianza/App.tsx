import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from './components/LoginComponent';
import SignUpComponent from './components/SignUpComponent';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Recipianza</Text>
    //   <StatusBar style="auto" />
    // </View>
    
    <LoginComponent/>
    //<SignUpComponent/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
