import { Share } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Constants } from "../constants/Constants";

export default class UserUtil{

    static async setUserLoggedInStatus(flag: string){
        try {
            await AsyncStorage.setItem(Constants.IS_USER_LOGGED_IN, flag)
          } catch (e) {
            alert('Error in Saving the User state');
          }
    }

    static async setLoggedInUserId(userID: string){
      try {
          await AsyncStorage.setItem(Constants.USER_ID, userID)
        } catch (e) {
          alert('Error in Saving the User Id');
        }
  }

  static async getLoggedInUserId() {
      const userId = await AsyncStorage.getItem(Constants.USER_ID)
      console.log('logged in user id', userId)
      return userId
  }

  static getCurrentUserId(): String{
    let userId: string = ''
    this.getLoggedInUserId().then(response => userId = response != null ? response.toString() : "")
    return userId
  }
  
  static async isUserLoggedIn() {
    try {
      const isUserLoggedIn = await AsyncStorage.getItem(Constants.IS_USER_LOGGED_IN)
      if(isUserLoggedIn !== null && isUserLoggedIn === Constants.FLAG_TRUE) {
        // value previously stored
        return true
      }
    } catch(e) {
      // error reading value
      return false
    }
    return false
  }

  static onShare = async (recipe: any) => {
    try {
      const result = await Share.share({
          title: recipe.title,
          message: recipe.description
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      // alert(error.message)
    }
  };
}