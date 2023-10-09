import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';


const firebaseapp = firebase.initializeApp ({
    apiKey: "AIzaSyBrHoWd6UiEFysOwh39pHpHx0I0N4MHPK8",
    authDomain: "facebook-clone-23d63.firebaseapp.com",
    projectId: "facebook-clone-23d63",
    storageBucket: "facebook-clone-23d63.appspot.com",
    messagingSenderId: "568786026188",
    appId: "1:568786026188:web:0a139a65668a2d0ff84c69"
});

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const functions = firebase.functions()


export {db, auth, storage, functions}
