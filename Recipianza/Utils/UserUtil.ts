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
      const userID = await AsyncStorage.getItem(Constants.USER_ID)
      console.log('logged in user id', userID)
      return userID
  }

  static getCurrentUserId(): String{
    let userId = ''
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
}