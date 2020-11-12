import firebase from 'firebase/app';
require("firebase/firestore");

const env = process.env;

export const firebaseConfig = {
    apiKey: "AIzaSyCkVm5qa0KBl2yJd0gPk0_-9Cp-5-OkYdw",
    authDomain: "znatz-72cf7.firebaseapp.com",
    databaseURL: "https://znatz-72cf7.firebaseio.com",
    projectId: "znatz-72cf7",
    storageBucket: "znatz-72cf7.appspot.com",
    messagingSenderId: "635513117633",
    appId: "1:635513117633:web:b3ccd19d9454c4c482ad40",
    measurementId: "G-RD0JQN4K4S"
};

// Firebaseを紐付け、初期化
export const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firestoreのインスタンス作成
export const firebaseStore = firebaseApp.firestore;

export default firebase;