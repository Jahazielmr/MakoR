import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAe_L3owWRrJfdxIutPbr1RKXJSgYlGrVU",
    authDomain: "makoreact-ed34b.firebaseapp.com",
    databaseURL: "https://makoreact-ed34b.firebaseio.com",
    projectId: "makoreact-ed34b",
    storageBucket: "makoreact-ed34b.appspot.com",
    messagingSenderId: "609017533244",
    appId: "1:609017533244:web:1bcd6b84c7835c38238439"
};


const fire = firebase.initializeApp(config);
export default fire;