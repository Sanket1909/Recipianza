import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();

 function createUser(userId: string, email: string, firstName: string, lastName: string) {
  set(ref(db, 'users/' + userId), {
    userId: userId,
    email: email,
    firstName: firstName,
    lastName: lastName
  });
}


export {createUser};