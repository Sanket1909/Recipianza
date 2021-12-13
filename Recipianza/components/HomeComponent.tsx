import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onValue } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from "react-native"
import { getRecipes } from '../apis/RecipeApi';
import RecipeDetailComponent from './RecipeDetailComponent';

const Stack = createNativeStackNavigator();
  
const HomeComponentContent = ({navigation}: any) =>{
    const [data, setData] = useState<any>({
        recipes: [],
        isLoading: true
    })   
    useEffect(() => {
        let recipes: any[] = []
        onValue(getRecipes(), (response) => {
            response.forEach((recipe) => {
                recipes.push(recipe.toJSON())
            })
            setData({
                recipes: recipes, 
                isLoading: false
            })
        });                        
    }, [])
    return(
            <SafeAreaView style={styles.container}>
                {data && !data.isLoading && data.recipes && data.recipes.length > 0 && (
                <FlatList
                    data={data.recipes}
                    keyExtractor={(item) => item.id}
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
                                        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'> {item.title} </Text>                                        
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
                                            source={{
                                                uri: item.image,
                                              }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>                        
                            </View>
                        </TouchableOpacity>
                    } 
                />
                )}
            </SafeAreaView>
    )
}

const HomeComponent = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponentContent}
                options={() => ({                    
                    title: 'Welcome',

                    headerTintColor: 'white',

                    headerStyle: {
                        backgroundColor: 'black'
                    }
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
        top: 4
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
        justifyContent: 'flex-start',
        flexShrink: 1,
        top: 5
    },
    recipeDurationImage:{
        padding: 10,
        marginVertical: 5,
        marginRight: 5,
        height: 25,
        width: 25
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
        height: 60
    }

})

export default HomeComponent;