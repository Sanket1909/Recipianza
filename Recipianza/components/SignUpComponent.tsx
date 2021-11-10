import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const SignUpComponent = () =>{
    return(
            <SafeAreaView style = {styles.container}>
                <View style={styles.topBox}>
                    <Image 
                        source ={require('../assets/logo_boarding.png')} 
                        style={styles.logoBoarding}
                    />                
                </View>
                <View style = {styles.bottomBox}>
                <ScrollView>
                    <View>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </View>
                    <View style={styles.horizontalLine}/>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        placeholderTextColor="#424242"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        placeholderTextColor="#424242"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#424242"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#424242"
                        keyboardType="email-address"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="#424242"
                        keyboardType="email-address"
                        secureTextEntry={true}
                    />                    
                    <TouchableOpacity style = {styles.buttonStyle}
                        onPress={() => {
                            alert("Sign Up")
                        }}>
                        <Text style = {styles.buttonFont}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            alert("Login")
                        }}>
                        <Text style={styles.loginButton}>Already Have An Account? LOGIN</Text>
                    </TouchableOpacity>
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
        flex: 1.3,
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
    signUpText:{
        marginTop: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28
    },
    horizontalLine:{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginTop: 5,
        marginLeft: 142,
        marginRight: 142
    },
    input:{
        height: 40,
        margin: 12,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    buttonStyle:{
        backgroundColor: '#FFFFFF',
        margin: 12,
        marginLeft: 30,
        marginRight: 30,
        padding: 10,
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 2,
        borderRadius: 25
    },
    buttonFont:{
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
    loginButton:{
        marginTop: 20,
        textAlign: 'center'
    }
})

export default SignUpComponent;