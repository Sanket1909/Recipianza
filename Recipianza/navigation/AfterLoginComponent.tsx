import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeComponent from '../components/HomeComponent';
import ProfileComponent from '../components/ProfileComponent';
import FavoritesComponent from '../components/FavoritesComponent';

const Tabs = createBottomTabNavigator();

const AfterLoginComponent = () =>{
    return(
        <Tabs.Navigator initialRouteName="tab-home">            
            <Tabs.Screen name="tab-home" component={HomeComponent} 
            options={{ 
                title: 'Home' ,
                tabBarIcon: ({color}) => (<AntDesign name="home" size={24} color={color}></AntDesign>)                
                }}></Tabs.Screen>
            <Tabs.Screen name="tab-favorite" component={FavoritesComponent}
            options={{ 
                title: 'Favorites',
                tabBarIcon: ({color}) => (<AntDesign name="book" size={24} color={color}></AntDesign>)                
                }}></Tabs.Screen>
            <Tabs.Screen name="tab-profile" component={ProfileComponent}
            options={{ 
                title: 'Profile',
                tabBarIcon: ({color}) => (<MaterialCommunityIcons name="face-profile" size={24} color={color}></MaterialCommunityIcons>)                
                }}></Tabs.Screen>
        </Tabs.Navigator>
    )
}

export default AfterLoginComponent;