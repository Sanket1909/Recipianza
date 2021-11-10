// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text, Image} from "react-native"

// const Stack = createNativeStackNavigator();

const recipeData = [
    {
        id: 1,
        title: "The Si mpsons",
        preparationTime: 1989,
        description: "The Si mpsons description", 
        image: require("../assets/recipeImages/pizza.png"), 
      },
      {
        id: 2,
        title: "SpongeBob SquarePants ",
        preparationTime: 1989,
        description: "The Si mpsons description", 
        image: require("../assets/recipeImages/pizza.png"), 
      }
    ] 
    
    const renderItem = ({ item, index }) => (
        // <View style = {styles.containerCell}> 
        //     <View style = {styles.containerCell}> <Text> {item.preparationTime}</Text> </View>
        //     <View style = {styles.containerCell}> <Text> {item.preparationTime}</Text> </View>
        // </View>

        <View style = {styles.containerCell}>
          <Text style={styles.title}> {item.title} </Text>
          <Text> {item.preparationTime}</Text>
          <Image
            style={{ height: "50%", width: "50%"}}
            source={item.image}
            resizeMode="contain"
          />
          <Text> {item.description} </Text>
        </View>
    )

const HomeComponent = ({navigation}: any) =>{
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
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    recipeImage: {

    }

})

// const HomeComponent =() => {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Home"
//                 component={HomeComponentContent}
//                 options={{ title: 'Welcome' }}
//             />
//         </Stack.Navigator>
//     )
// } 

export default HomeComponent;