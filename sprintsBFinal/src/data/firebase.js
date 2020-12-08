import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyANNdECpdaC8qcArLtYUNn_wpTrmJqXMW4",
  authDomain: "monsters-cb17a.firebaseapp.com",
  databaseURL: "https://monsters-cb17a.firebaseio.com",
  projectId: "monsters-cb17a",
  storageBucket: "monsters-cb17a.appspot.com",
  messagingSenderId: "970590739364",
  appId: "1:970590739364:web:78dd5c2f07ecbc6a31ff31",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const monstersCollection = db.collection("monstersCollection");

export default db;
export { monstersCollection };
