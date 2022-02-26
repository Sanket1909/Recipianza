import { getDatabase, Query, ref, set, update } from "firebase/database";
import UserUtil from '../Utils/UserUtil';

const db = getDatabase();

 function createUser(userId: string, email: string, firstName: string, lastName: string) {
    set(ref(db, 'users/' + userId), {
      userId: userId,
      email: email,
      firstName: firstName,
      lastName: lastName
    });
  }

  function getUserProfile(): Query {      
    return ref(db, 'users/' + UserUtil.getCurrentUserId());         
  }

  function updateProfile(userId: string, firstName: string, lastName: string) {
    return update(ref(db, 'users/' + userId), {
      firstName: firstName,
      lastName: lastName
    });
  }

  function addToFavorites(userId: string, recipe: any){
     update(ref(db, 'users/' + userId + '/favorites/' + recipe.id), recipe)
  }

  function removeFromFavorites(userId: string, recipe: any){
    update(ref(db, 'users/' + userId ), {
      ['/favorites/' + recipe.id]: null
    })
  }

  function checkRecipeExistInFavorites(userId: string, recipeId: string): Query{
    return ref(db, 'users/' + userId + '/favorites/' + recipeId)
  }

  function getFavoriteRecipes(userId: string): Query{
    return ref(db, 'users/' + userId + '/favorites')
  }

export {createUser, getUserProfile, updateProfile, addToFavorites, removeFromFavorites, checkRecipeExistInFavorites, getFavoriteRecipes}; 
