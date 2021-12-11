import { getDatabase, onValue, ref, set } from "firebase/database";
import UserUtil from "../utils/UserUtil";

const db = getDatabase();

 function createUser(userId: string, email: string, firstName: string, lastName: string) {
  set(ref(db, 'users/' + userId), {
    userId: userId,
    email: email,
    firstName: firstName,
    lastName: lastName
  });
}

  function getUserProfile() {      

    let user : any = {};

    const reference = ref(db, 'users/' + UserUtil.getCurrentUserId());
    onValue(reference, (response) => {
        user = response.toJSON()
        console.log("User Profile: " + JSON.stringify(user))
    }); 
  return user
  }

export {createUser, getUserProfile}; 
