import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
    apiKey: "AIzaSyD1TB5t17ZHgPTFu5yD921rjRMzTFHr4Pw",
    authDomain: "swap-and-go-32571.firebaseapp.com",
    projectId: "swap-and-go-32571",
    storageBucket: "swap-and-go-32571.appspot.com",
    messagingSenderId: "338249502286",
    appId: "1:338249502286:web:fa4a636505dddd3ac4fd1f",
    measurementId: "G-Y28X0JSHMB"
};

const fire = firebase.initializeApp(config);
export default fire;