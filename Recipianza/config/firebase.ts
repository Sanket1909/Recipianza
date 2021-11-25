import firebase from "firebase/app";
import "firebase/auth";
import config from "./config";


const Firebase = firebase.initializeApp(config.firebase);

export default Firebase;