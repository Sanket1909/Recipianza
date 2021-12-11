import { getDatabase, onValue, ref, set } from "firebase/database";

const db = getDatabase();

 function getRecipes() {
     let recipes: any[] = []
     const reference = ref(db, 'recipes');
        onValue(reference, (response) => {
            response.forEach((recipe) => {
                recipes.push(recipe.toJSON())
            })            
            console.log("Recipes: " + recipes.length);
        }); 
     return recipes
 }

 export {getRecipes};