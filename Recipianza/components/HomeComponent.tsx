import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from "react-native"
import RecipeDetailComponent from './RecipeDetailComponent';

const Stack = createNativeStackNavigator();

const recipeData = [
    {
        id: 1,
        title: "Garlic Pizza",
        preparationTime: '1 hour',
        description: "The garlic pizza.", 
        image: require("../assets/recipeImages/pizza.png"), 
      },
      {
        id: 2,
        title: "Mexican Pizza",
        preparationTime: '45 mins',
        description: "The mexican pizza.", 
        image: require("../assets/recipeImages/pizza.png")
      }
    ] 
    
const HomeComponentContent = ({navigation}: any) =>{
    return(
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={recipeData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({item}) => 
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('RecipeDetail', {recipe: item})
                            }}
                        >
                            <View style = {[styles.containerCell]}>
                                <View style={styles.recipeDetail}>
                                    <View style={styles.recipeTitleImage}>
                                        <Text style={styles.title}> {item.title} </Text>
                                        <View style={styles.durationContainer}>
                                            <Image 
                                                source ={require('../assets/icons/time.png')} 
                                                style={styles.recipeDurationImage}
                                            /> 
                                            <Text style={styles.recipeDurationText}>{item.preparationTime}</Text>
                                        </View>
                                        <View style={[styles.recipeDescription, { flexDirection: 'row' }]}>
                                            <Text numberOfLines={4} > {item.description} </Text>
                                        </View>
                                    </View>
                                    <View style={styles.recipeImageContainer}>
                                        <Image
                                            style={styles.recipeImage}
                                            source={item.image}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>                        
                            </View>
                        </TouchableOpacity>
                    } 
                />
            </SafeAreaView>
    )
}

const HomeComponent = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponentContent}
                options={({ navigation }) => ({                    
                    title: 'Welcome',

                    headerTintColor: 'white',

                    headerStyle: {
                        backgroundColor: 'black'
                    },
                    // headerRight: () => <TouchableOpacity style={ [{paddingHorizontal:15}] }
                    // onPress={() => navigation.navigate('Favorites') }>
                    // <Image
                    //      style={{height: 40, width :40,marginTop:0 ,marginLeft:0,marginRight:-20 }}
                    //      resizeMode="contain"
                    //      source={require('../assets/icons/heart_white.png')}>
                    // </Image>
                    // </TouchableOpacity>,

                    // headerLeft: () => <TouchableOpacity style={ [{paddingHorizontal:0}] }
                    // onPress={() => navigation.navigate('Profile') }>
                    // <Image
                    //     style={{height: 40, width :40,marginTop:0 ,marginLeft:-10,marginRight:0 }}
                    //     resizeMode="contain"
                    //     source={require('../assets/icons/user_white.png')}>
                    // </Image>
                    // </TouchableOpacity>
                })}
            />

            <Stack.Screen name="RecipeDetail" component={RecipeDetailComponent} 
                options={{
                    title: 'Detail',

                    headerTintColor: 'white',

                    headerStyle: {
                        backgroundColor: 'black'
                    },
            }}/>
        </Stack.Navigator>
    )
} 

const styles = StyleSheet.create({
    containerExp: {
        flex: 1,
        flexDirection:"column"
    },
    container:{
        flex: 1,
        backgroundColor: '#EED50F'
    },
    title: {
        fontSize: 20,
    },
    containerCell: {
        height: 160,
        margin: 20,
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    recipeDetail:{
        flexDirection: 'row', 
        height: 120
    },
    recipeTitleImage:{
        flexDirection: 'column',
        flex: 1
    },
    durationContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    recipeDurationImage:{
        padding: 10,
        marginVertical: 5,
        marginRight: 5,
        height: 25,
        width: 25,
    },
    recipeDurationText:{
        color: 'red',
        marginTop: 8
    },
    recipeImageContainer:{
        flexDirection: 'column', 
        flex: 1
    },
    recipeImage:{ 
        height: '100%', 
        width: '100%'
    },
    recipeDescription:{
        flexDirection: 'row', 
        height: 40
    }

})

export default HomeComponent;