import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native"

const LoginComponent = () =>{
    return(
        <SafeAreaView style = {styles.container}>
            {/* Top Image View */}
            <View style={styles.topBox}>
                <Image 
                    source ={require('../assets/logo_boarding.png')} 
                    style={{width: '100%', height: '100%'}}
                />                
            </View>

            
            {/* Login Button */}
            <View style = {styles.bottomBox}>
            <ScrollView>
                    {/* Sign-in View */}
                    <View> 
                        <Text style={styles.signinText}>Sign-in</Text>
                    </View>   

                    <View style={styles.horizontalLine}/>

                    {/* TextField View */}
                    <View style={styles.inputTextContainer}>
                        <Image source={require('../assets/icons/email.png')} style={styles.inputTextImage} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email"
                            placeholderTextColor="#424242"                                keyboardType="email-address"
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

                    <TouchableOpacity style = {styles.loginButtonStyle}
                        onPress={() => {
                            alert("I am working")
                        }}
                    >
                    <Text style = {styles.buttonFont}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            alert("I am working")
                        }}
                    >
                    <Text style = {styles.signupButton}>Don't have account? SIGN UP</Text>
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
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 15
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
    horizontalLine:{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginTop: 10,
        marginLeft: 142,
        marginRight: 142,
        marginBottom: 20,
    },
    signupButton:{
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    }
})

export default LoginComponent;