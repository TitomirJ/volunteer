import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const config = {
    apiKey: "AIzaSyBLr9134sGWtVpKfQmdfEuOwYdREKBM49c",
    authDomain: "volunteer-198f8.firebaseapp.com",
    projectId: "volunteer-198f8",
    storageBucket: "volunteer-198f8.appspot.com",
    messagingSenderId: "820997067093",
    appId: "1:820997067093:web:7a996371a02e697fee9fdc",
    measurementId: "G-XVB8234N8K"
};

firebase.initializeApp(config);

const storage = firebase.storage();
export { storage, firebase as default };
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();


