import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from "react-native"
import RecipeDetailComponent from './RecipeDetailComponent';

const Stack = createNativeStackNavigator();

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
    
    const renderItem = ({ item, navigation }: any) => (
        <TouchableOpacity
            onPress={() => {
                alert(JSON.stringify(item))
                // alert(JSON.stringify(navigation))
                navigation.navigate('RecipeDetail', {data: item})
            }}
        >
            <View style = {[styles.containerCell, { height: 160}]}>
                <View style={{flexDirection: 'row', height: 120}}>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <Text style={styles.title}> {item.title} </Text>
                        <View style={styles.durationContainer}>
                            <Image 
                                source ={require('../assets/icons/time.png')} 
                                style={styles.recipeDurationImage}
                            /> 
                            <Text style={styles.recipeDurationText}>{item.preparationTime}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <Image
                            style={{ height: '100%', width: '100%'}}
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={{flexDirection: 'row', height: 40}}>
                    <Text> {item.description} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )

const HomeComponentContent = ({navigation}: any) =>{
    return(
        <SafeAreaView style = {styles.container}>
            <View style={styles.container}>
                <FlatList
                    data={recipeData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}

const HomeComponent =() => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponentContent} options={{title: 'Welcome'}}/>
            <Stack.Screen name="RecipeDetail" component={RecipeDetailComponent} options={{title: 'Detail'}}/>
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
        margin: 20,
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    recipeImage: {

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

})

export default HomeComponent;