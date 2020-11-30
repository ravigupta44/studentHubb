// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBh4xX2E03FMCfd9jKt9PdOaGY4tyTb6tY",
  authDomain: "studenthub-chat.firebaseapp.com",
  databaseURL: "https://studenthub-chat.firebaseio.com",
  projectId: "studenthub-chat",
  storageBucket: "studenthub-chat.appspot.com",
  messagingSenderId: "564804053576",
  appId: "1:564804053576:web:a8c78cf3cf9a92865c067d",
  measurementId: "G-PQZN6TZC82"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };

