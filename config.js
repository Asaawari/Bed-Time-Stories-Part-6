import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC5ZyKI40I1xWvG2B3-4LvC9dspQjLfWtk",
    authDomain: "bed-time-stories-f680d.firebaseapp.com",
    databaseURL: "https://bed-time-stories-f680d.firebaseio.com",
    projectId: "bed-time-stories-f680d",
    storageBucket: "bed-time-stories-f680d.appspot.com",
    messagingSenderId: "409377949801",
    appId: "1:409377949801:web:991657f4cca75304f1faf8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();