import { getDatabase, onValue, Query, ref, set } from "firebase/database";
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

  function getUserProfile(): Query {      
    return ref(db, 'users/' + UserUtil.getCurrentUserId());         
  }

export {createUser, getUserProfile}; 
