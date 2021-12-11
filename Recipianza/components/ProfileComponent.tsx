import { signOut } from '@firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import auth from '../config/firebase';
import { Constants } from '../constants/Constants';
import UserUtil from '../utils/UserUtil';
import HeaderComponent from './HeaderComponent';

const handleSignOut = () => {
    signOut(auth)
    .then(() => {        
        console.log('Sign Out');
        UserUtil.setUserLoggedInStatus(Constants.FLAG_FALSE);
    })
    .catch(error => {
        alert(error.message);
    })
}

const ProfileComponent = () =>{
    return(
            <View style = {styles.container}>
                <HeaderComponent/>
                <View style={styles.topBox}>
                    <Image 
                        source ={require('../assets/profile.png')}
                    /> 
                    <View style={styles.seperator}/>
                    <View>
                        <Text style={styles.signUpText}>Recipianza</Text>
                    </View>
                    <View style={styles.seperator}/>              
                </View>
                <View style = {styles.bottomBox}>
                    <ScrollView style={styles.scrollView}>     
                    <KeyboardAvoidingView enabled>                   
                        <View style={styles.inputTextContainer}>
                            <Image source={require('../assets/icons/user.png')} style={styles.inputTextImage} />
                            <TextInput
                                style={styles.inputText}
                                placeholder="First Name"
                                placeholderTextColor="#424242"
                            />
                        </View>
                        <View style={styles.inputTextContainer}>
                            <Image source={require('../assets/icons/user.png')} style={styles.inputTextImage} />
                            <TextInput
                                style={styles.inputText}
                                placeholder="Last Name"
                                placeholderTextColor="#424242"
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
                            />
                        </View>                        
                        <TouchableOpacity style = {styles.buttonStyle}
                            onPress={() => {
                                alert("Profile Saved")
                            }}>
                            <Text style = {styles.buttonFont}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.buttonStyle}
                            onPress={handleSignOut}>
                            <Text style = {[styles.buttonFont, styles.logoutText]}>Logout</Text>
                        </TouchableOpacity>  
                        </KeyboardAvoidingView>                  
                    </ScrollView>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#EED50F'
    },
    topBox:{
        flex: 1.5,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    bottomBox:{
        flex: 2,
        padding: 10
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
        padding: 10,
        width: '100%'
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
        fontSize: 25,
        fontWeight: 'bold'
    },
    logoutText:{
        color: 'red'
    }
})

export default ProfileComponent;