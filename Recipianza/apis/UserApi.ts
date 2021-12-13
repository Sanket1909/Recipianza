import { getDatabase, Query, ref, set, update } from "firebase/database";
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

  function updateProfile(userId: string, firstName: string, lastName: string) {
    return update(ref(db, 'users/' + userId), {
      firstName: firstName,
      lastName: lastName
    });
  }

export {createUser, getUserProfile, updateProfile}; 
