import firebase from "firebase/app"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyCD1ry0nveRqeOxhku1nuRtTq_bYSpmoiQ",
    authDomain: "authdev-b0914.firebaseapp.com",
    projectId: "authdev-b0914",
    storageBucket: "authdev-b0914.appspot.com",
    messagingSenderId: "886522987589",
    appId: "1:886522987589:web:8e258840560be711708f2c",
    measurementId: "G-VZNWTDPQN8"
  };

export const auth = firebase.initializeApp(firebaseConfig).auth()

//export const auth = app.auth()
//export default app