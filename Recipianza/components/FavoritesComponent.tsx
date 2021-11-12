import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from "react-native"


const recipeData = [
    {
        id: 1,
        title: "The Si mpsons",
        preparationTime: '1 hour',
        description: "The Si mpsons description", 
        image: require("../assets/recipeImages/pizza.png"), 
      },
      {
        id: 2,
        title: "SpongeBob SquarePants",
        preparationTime: '45 mins',
        description: "The Si mpsons description.", 
        image: require("../assets/recipeImages/pizza.png")
      }
    ] 
    
const FavoritesComponent = ({navigation}: any) =>{
    return(
        <SafeAreaView style = {styles.container}>
            <View style={styles.container}>
                <FlatList
                    data={recipeData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({item}) => 
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('RecipeDetail', {data: item})
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
            </View>
        </SafeAreaView>
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

export default FavoritesComponent;