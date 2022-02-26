import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from '@firebase/auth';
import auth from '../config/firebase';


export async function signUpUser(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      return userCredential; 
    })
    .catch(error => {       
      console.error(error);
      return error;
    });
  
}

export async function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}