import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCw1KFlXZGi9-AQRvQAnKA2lepFR0vsbqo",
  authDomain: "react-slack-clone-17130.firebaseapp.com",
  databaseURL: "https://react-slack-clone-17130.firebaseio.com",
  projectId: "react-slack-clone-17130",
  storageBucket: "react-slack-clone-17130.appspot.com",
  messagingSenderId: "59187798263",
  appId: "1:59187798263:web:7e75f25acafad368"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
