import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDpOPL7USMZKiuvu3CtzG2Jdt8620v8oEk",
        authDomain: "login-1bcd0.firebaseapp.com",
        projectId: "login-1bcd0",
        storageBucket: "login-1bcd0.appspot.com",
        messagingSenderId: "114970673372",
        appId: "1:114970673372:web:bbce7766d9168c8dbcb419",
        measurementId: "G-7HL0BV5617"
    }
);

const auth = firebaseApp.auth();

export default auth;