import { getDatabase, Query, ref } from "firebase/database";

const db = getDatabase();

 function getRecipes(): Query {     
     return ref(db, 'recipes');             
 }

 export {getRecipes};