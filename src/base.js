import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGfpKk-G5ID9aJ0OVQRqPp0ZFINHEEXqc",
  authDomain: "recetteapp-53f6b.firebaseapp.com",
  databaseURL: "https://recetteapp-53f6b.firebaseio.com",
  projectId: "recetteapp-53f6b",
  storageBucket: "recetteapp-53f6b.appspot.com",
  messagingSenderId: "535216314057",
  appId: "1:535216314057:web:002b53650217f4ba"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
