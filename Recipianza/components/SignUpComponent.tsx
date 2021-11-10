import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const SignUpComponent = () =>{
    return(
        <SafeAreaView style = {styles.container}>
            <View style={styles.topBox}>
                <Image 
                    source ={require('../assets/logo_boarding.png')} 
                    style={{width: '100%', height: '100%'}}
                />                
            </View>
            <View style = {styles.bottomBox}>
                <TouchableOpacity style = {styles.buttonStyle}
                    onPress={() => {
                        alert("I am working")
                    }}
                >
                <Text style = {styles.buttonFont}>Sign Up</Text>
                </TouchableOpacity>
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
        backgroundColor: "#EED50F"
    },
    buttonStyle:{
        backgroundColor: "grey",
        padding: 10,
        alignItems: "center",
        marginBottom: 2
    },
    buttonFont:{
        color: "white"
    }
})

export default SignUpComponent;