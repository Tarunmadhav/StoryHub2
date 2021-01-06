import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDprrwiucDyB97To227JTa-DOzZjx_aTqA",
  authDomain: "storyhub2-f7274.firebaseapp.com",
  projectId: "storyhub2-f7274",
  storageBucket: "storyhub2-f7274.appspot.com",
  messagingSenderId: "407933084932",
  appId: "1:407933084932:web:41fa3a31cdf7d47f0d1c51",
  measurementId: "G-SQFQ019E5V"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();