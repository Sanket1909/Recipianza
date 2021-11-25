import { signInWithEmailAndPassword } from '@firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from "react-native"
import auth from '../config/firebase';
import { Constants } from '../constants/Constants';
import UserUtil from '../utils/UserUtil';
import SignUpComponent from './SignUpComponent';

const Stack = createNativeStackNavigator();
    
const LoginComponentContent = ({navigation}: any) =>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ', user.email);
            UserUtil.setUserLoggedInStatus(Constants.FLAG_TRUE);
        }).catch(error => {
            alert(error.message)
        })
    }
    return(
        <SafeAreaView style = {styles.container}>
            {/* Top Image View */}
            
            <View style={styles.topBox}>
                <Image 
                    source ={require('../assets/logo_boarding.png')} 
                    style= {styles.logoBoarding}
                />                
            </View>

            
            {/* Login Button */}
            <View style = {styles.bottomBox}>
            <ScrollView>
            <KeyboardAvoidingView enabled>
                    {/* Sign-in View */}
                    <View> 
                        <Text style={styles.signinText}>Sign-in</Text>
                    </View>   

                    <View style={styles.seperator}/>

                    {/* TextField View */}
                    <View style={styles.inputTextContainer}>
                        <Image source={require('../assets/icons/email.png')} style={styles.inputTextImage} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email"
                            placeholderTextColor="#424242"                                
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>

                   <View style={styles.inputTextContainer}>
                        <Image source={require('../assets/icons/password.png')} style={styles.inputTextImage} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Password"
                            placeholderTextColor="#424242"
                            keyboardType="email-address"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={text => setPassword(text)}
                         />
                    </View>

                    <TouchableOpacity style = {styles.loginButtonStyle}
                        onPress={handleLogin}
                    >
                    <Text style = {styles.buttonFont}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignUp');
                        }}
                    >
                    <Text style = {styles.signupButton}>Don't have account? SIGN UP</Text>
                    </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const LoginComponent =() => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginComponentContent}/>
            <Stack.Screen name="SignUp" component={SignUpComponent} options={{title: 'Sign Up'}}/>            
        </Stack.Navigator>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },
    topBox:{
        flex: 1.5,
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 15
    },
    logoBoarding:{
        width: '100%', 
        height: '100%'
    },
    bottomBox:{
        flex: 2,
        padding: 10,
        backgroundColor: "#EED50F",
        borderTopLeftRadius:75,
    },
    loginButtonStyle:{
        height: 50,
        backgroundColor: '#FFFFFF',
        marginTop:20,
        marginLeft: 30,
        marginRight: 30,
        padding: 10,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 25
    },
    buttonFont:{
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
    signupButtonFont: {
        fontSize: 20,
        color: "black"
    },
    inputTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        height: 50,
        borderRadius: 5 ,
        margin: 12
    },
    inputTextImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    inputText:{
        flex:1,
        fontSize: 20
    },
    signinText: {
        marginTop:20,
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
    },
    seperator:{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginTop: 10,        
        marginBottom: 20,
        width: '30%',
        alignSelf: 'center'
    },
    signupButton:{
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    }
})

export default LoginComponent;