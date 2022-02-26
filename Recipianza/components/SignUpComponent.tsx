import { createUserWithEmailAndPassword, UserCredential } from '@firebase/auth';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Alert } from "react-native";
import { createUser } from '../apis/UserApi';
import auth from '../config/firebase';
import { signUpUser } from '../services/user.api.service';

const SignUpComponent = ({navigation}: any) =>{   
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [status, setStatus] = useState('');
    
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    // const handleSignUp = () => {
    
    //     if (firstName.trim().length < 2) {
    //         alert('Please enter your first name. Name should be greater than 2 characters.')
    //         return;
    //     } else if (lastName.trim().length < 2) {
    //         alert('Please enter your last name. Name should be greater than 2 characters.')
    //         return;
    //     } else if (!strongRegex.test(email)) {
    //         alert('Please enter a valid email id')
    //         return false;
    //     } else if (password.trim().length < 8) {
    //         alert('Password must be minimum 8 characters')
    //         return;
    //     } else if (confirmPassword.trim().length < 8) {
    //         alert('Password must be minimum 8 characters')
    //         return;
    //     } else if(password !== confirmPassword){
    //         alert('Password & Confirm Password must be same.')
    //         return;
    //     } else {
    //         createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             console.log(user.email);
    //             createUser(user.uid, email, firstName, lastName);
    //             alert('Signup successfull.')
    //             navigation.navigate('Login');        
    //         })
    //         .catch((error) => {            
    //             alert(error.message);
    //         });
    //     }
    // }
    
    // New changes
    async function doRegister () {
        if (firstName.trim().length < 2) {
            Alert.alert('Please enter your first name. Name should be greater than 2 characters.')
            return;
        } else if (lastName.trim().length < 2) {
            Alert.alert('Please enter your last name. Name should be greater than 2 characters.')
            return;
        } else if (!strongRegex.test(email)) {
            Alert.alert('Please enter a valid email id')
            return false;
        } else if (password.trim().length < 8) {
            Alert.alert('Password must be minimum 8 characters')
            return;
        } else if (confirmPassword.trim().length < 8) {
            Alert.alert('Password must be minimum 8 characters')
            return;
        } else if(password !== confirmPassword){
            Alert.alert('Password & Confirm Password must be same.')
            return;
        }
        setStatus('Registering ..')

        signUpUser(email, password).then((userCredential: UserCredential) => {
            createUser(userCredential.user.uid, email, firstName, lastName);
            Alert.alert('Success, Please Login');
            navigation.goBack();
        }).catch(error => {
            Alert.alert(error.message)
        })                    
    }
    return(
            <SafeAreaView style = {styles.container}>
                
                <View style={styles.topBox}>
                    <Image 
                        source ={require('../assets/logo_boarding.png')} 
                        style={styles.logoBoarding}
                    />                
                </View>
                <View style = {styles.bottomBox}>
                    <ScrollView style={styles.scrollView}>
                    <KeyboardAvoidingView enabled>
                        <View>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </View>
                        <View style={styles.seperator}/>
                        <View style={styles.inputTextContainer}>
                            <Image source={require('../assets/icons/user.png')} style={styles.inputTextImage} />
                            <TextInput
                                style={styles.inputText}
                                placeholder="First Name"
                                placeholderTextColor="#424242"
                                value={firstName}
                                onChangeText={text => setFirstName(text)}
                            />
                        </View>
                        <View style={styles.inputTextContainer}>
                            <Image source={require('../assets/icons/user.png')} style={styles.inputTextImage} />
                            <TextInput
                                style={styles.inputText}
                                placeholder="Last Name"
                                placeholderTextColor="#424242"
                                value={lastName}
                                onChangeText={text => setLastName(text)}
                            />
                        </View>
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
                        <View style={styles.inputTextContainer}>
                            <Image source={require('../assets/icons/password.png')} style={styles.inputTextImage} />
                            <TextInput
                                style={styles.inputText}
                                placeholder="Confirm Password"
                                placeholderTextColor="#424242"
                                keyboardType="email-address"
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={text => setConfirmPassword(text)}
                            />
                        </View>
                        <TouchableOpacity style = {styles.buttonStyle}
                            onPress={doRegister}>
                            <Text style = {styles.buttonFont}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Login')
                            }}>
                            <Text style={styles.loginButton}>Already Have An Account? LOGIN</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },
    topBox:{
        flex: 1.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 15
    },
    logoBoarding:{
        width: '100%', 
        height: '100%'
    },
    bottomBox:{
        flex: 2,
        padding: 10,
        backgroundColor: '#EED50F',
        borderTopRightRadius: 75
    },
    scrollView:{
        marginLeft: 15, 
        marginRight: 15
    },
    signUpText:{
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28
    },
    seperator:{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginTop: 10,
        marginBottom: 20,
        width: '30%',
        alignSelf: 'center'
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
    buttonStyle:{
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        padding: 10,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 25,
        height: 50
    },
    buttonFont:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginButton:{
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    }
})

export default SignUpComponent;