import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCXeJwOgBj75GSoKmx2POU0_xYJ375_mfw",
    authDomain: "hybri-test-dev.firebaseapp.com",
    projectId: "hybri-test-dev",
    storageBucket: "hybri-test-dev.appspot.com",
    messagingSenderId: "677234557746",
    appId: "1:677234557746:web:946d935f0e23a21d390d2b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };