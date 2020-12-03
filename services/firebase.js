import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5Cdn8p8pif5Qy3ia77r5JwSnDok57Mwo",
    authDomain: "grupou-46ea4.firebaseapp.com",
    projectId: "grupou-46ea4",
    storageBucket: "grupou-46ea4.appspot.com",
    messagingSenderId: "1058258331209",
    appId: "1:1058258331209:web:ad2d2a8276dcffb15e8198"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}