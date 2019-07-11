import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAfYJFf5gSBeY0HRu-7ZnM75HRoMwTnP9M",
    authDomain: "iknow-ac1fb.firebaseapp.com",
    databaseURL: "https://iknow-ac1fb.firebaseio.com",
    projectId: "iknow-ac1fb",
    storageBucket: "iknow-ac1fb.appspot.com",
    messagingSenderId: "13609815640",
    appId: "1:13609815640:web:7f114f9c9e30ba5e"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase