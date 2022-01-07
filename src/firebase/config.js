import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_APIKEY,
  authDomain:  process.env.REACT_APP_FIREBASE_CONFIG_AUTHDOMAIN,
  projectId: "healthy-meal-26e31",
  storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_CONFIG_APPID
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_CONFIG_APIKEY,
//   authDomain:,
//   projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECTID,
//   storageBucket: ,
//   messagingSenderId: ,
//   appId: ,
// };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
