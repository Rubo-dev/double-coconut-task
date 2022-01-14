import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';


export const app =  firebase.initializeApp({
    apiKey: "AIzaSyCDxIFHawYGpu6WtkO6xzwsuWVF_RmEDbQ",
    authDomain: "double-coconut.firebaseapp.com",
    projectId: "double-coconut",
    storageBucket: "double-coconut.appspot.com",
    messagingSenderId: "116716116175",
    appId: "1:116716116175:web:57dcbc59e48210c16c7fba"
  });

export const db = getFirestore();
export const auth = app.auth();  