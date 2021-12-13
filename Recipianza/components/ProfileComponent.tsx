import { signOut } from '@firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onValue } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import { getUserProfile } from '../apis/UserApi';
import auth from '../config/firebase';
import { Constants } from '../constants/Constants';
import UserUtil from '../utils/UserUtil';

const Stack = createNativeStackNavigator();

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

const ProfileComponentContent = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [data, setData] = useState<any>({
        isLoading: true
    })
    
    useEffect(() => {
        let user: User = {
            userId: '',
            firstName: '',
            lastName: '',
            email: ''
        }
        onValue(getUserProfile(), (response) => {
            response.forEach(iUser => {
                let iUserJson = iUser.toJSON()                                    
                Object.assign(iUserJson, iUser)
                if(user.userId === UserUtil.getCurrentUserId()){
                    Object.assign(user, iUserJson)
                }
            })            
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setEmail(user.email)            
            setData({
                isLoading: false
            })
        });                                    
    }, [])
    return(
            <SafeAreaView style = {styles.container}>
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
                                value={firstName}
                            />
                        </View>
                        <View style={styles.inputTextContainer}>
                            <Image source={require('../assets/icons/user.png')} style={styles.inputTextImage} />
                            <TextInput
                                style={styles.inputText}
                                placeholder="Last Name"
                                placeholderTextColor="#424242"
                                value={lastName}
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
                                editable={false}
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
            </SafeAreaView>
    )
}

const ProfileComponent = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileComponentContent}
                options={({ navigation }) => ({                    
                    title: 'Profile',

                    headerTintColor: 'white',

                    headerStyle: {
                        backgroundColor: 'black'
                    }
                })}
            />
        </Stack.Navigator>
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
        alignItems: 'center',
        marginTop: 10
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