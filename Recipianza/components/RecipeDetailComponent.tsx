import { onValue } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { addToFavorites, checkRecipeExistInFavorites, removeFromFavorites } from '../apis/UserApi';
import auth from '../config/firebase';

const RecipeDetailComponent = ({ route, navigation }: any) =>{

    const [favorite, setFavorite] = useState<boolean>(false)
    const recipe = route.params.recipe;

    const addFavorite = () => {      
        addToFavorites(auth.currentUser != null ? auth.currentUser.uid :  '', recipe)
        setFavorite(true)
        console.log('Favorite add flag : '+favorite)
        Alert.alert('Recipe added to favourites')
    }

    const removeFavorite = () => {      
        removeFromFavorites(auth.currentUser != null ? auth.currentUser.uid :  '', recipe)      
        setFavorite(false)
        console.log('Favorite remove flag : '+favorite)
        Alert.alert('Recipe removed from favourites')
    }

    useEffect(() => {     
        const unsubscribe = navigation.addListener('focus', () => {   
            onValue(checkRecipeExistInFavorites(auth.currentUser != null ? auth.currentUser.uid :  '', recipe.id), (response) => {
                    let retrievedRecipe: any = {}
                    Object.assign(retrievedRecipe, response.toJSON())   
                    console.log('Favorite recipe : '+ JSON.stringify(response))                 
                    if (retrievedRecipe && retrievedRecipe.id){
                        setFavorite(true)                                              
                    }
                    console.log('Favorite flag : '+favorite)                     
            });
        });              
        return unsubscribe
    }, [navigation])
        
    return(
            <SafeAreaView style = {styles.container}>
                <View style={styles.topBox}>          
                    <Image 
                        source={{
                            uri: recipe.image,
                          }}
                        style={styles.recipeImage}
                    />                
                </View>
                <View style = {styles.bottomBox}>
                    <ScrollView style={styles.scrollView}>
                        <View>
                            <Text style={styles.recipeText}>{recipe.title}</Text>
                        </View>
                        {/* <View>
                            <Text style={styles.recipeOwnerText}> - Dominos</Text>
                        </View> */}
                        <View style={styles.durationContainer}>
                            {  favorite === true ?
                                 (<TouchableOpacity activeOpacity = { .5 }  onPress={() => {
                                    removeFavorite()  
                                 }}>                     
                                 <Image 
                                         source ={require('../assets/icons/heart_selected.png')} 
                                         style={styles.recipeDurationImage}
                                     /> 
                                 </TouchableOpacity>
                                 )
                                :
                                (
                                 <TouchableOpacity activeOpacity = { .5 } onPress={() => {
                                    addFavorite() 
                                 }}>
                                 <Image 
                                         source ={require('../assets/icons/heart_unselected.png')} 
                                         style={styles.recipeDurationImage}
                                     />
                                 </TouchableOpacity>                                                       
                                )
                            }
                       
                        </View>
                        <View style={styles.durationContainer}>
                            <Image 
                                source ={require('../assets/icons/time.png')} 
                                style={styles.recipeDurationImage}
                                
                            /> 
                            <Text style={styles.recipeDurationText}>{recipe.preparationTime}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.recipeDescription} >                    
                                    {recipe.description}
                            </Text>
                        </View>
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
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 15
    },
    bottomBox:{
        flex: 2,
        padding: 10,
        backgroundColor: '#EED50F',
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75
    },
    scrollView:{
        marginLeft: 15, 
        marginRight: 15
    },
    recipeImage:{
        width: '100%', 
        height: '100%'
    },
    durationContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    recipeDurationImage:{
        padding: 10,
        marginVertical: 15,
        marginRight: 5,
        height: 25,
        width: 25,
    },
    recipeDurationText:{
        color: 'red',
        marginTop: 20
    },
    recipeText:{
        marginTop: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 28
    },
    recipeOwnerText:{
        marginTop: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 22,
        color: 'navy'
    },
    recipeDescription:{
        marginTop: 5,
        fontSize: 24,
        flexShrink: 1        
    }
})

export default RecipeDetailComponent;