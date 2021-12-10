import { getAuth } from 'firebase/auth';
import * as firebase from "firebase/app";
import config from "./config";


let app; 

if(firebase.getApps().length === 0){
    app = firebase.initializeApp(config.firebase);
}else{
    app = firebase.getApp();
}

const auth = getAuth();

export default auth;