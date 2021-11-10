import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const Stack = createNativeStackNavigator();

const SignUpComponent = ({navigation}: any) =>{
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
                        <View>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </View>
                        <View style={styles.horizontalLine}/>
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
                        <View style={styles.inputTextContainer}>
                            <Image source={require('../assets/icons/password.png')} style={styles.inputTextImage} />
                            <TextInput
                                style={styles.inputText}
                                placeholder="Password"
                                placeholderTextColor="#424242"
                                keyboardType="email-address"
                                secureTextEntry={true}
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
                            />
                        </View>
                        <TouchableOpacity style = {styles.buttonStyle}
                            onPress={() => {
                                alert("Sign Up")
                            }}>
                            <Text style = {styles.buttonFont}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Login')
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
    horizontalLine:{
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
        fontSize: 25,
        fontWeight: 'bold'
    },
    loginButton:{
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    }
})

export default SignUpComponent;