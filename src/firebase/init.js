import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByw_WhMWLAurlYvs4PgwGT71LiFG8TuCY",
  authDomain: "forex-platform-b566d.firebaseapp.com",
  databaseURL: "https://forex-platform-b566d.firebaseio.com",
  projectId: "forex-platform-b566d",
  storageBucket: "forex-platform-b566d.appspot.com",
  messagingSenderId: "577205766787",
  appId: "1:577205766787:web:cdcf60619eaff0a77ae9b6"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();