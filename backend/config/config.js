import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCNxiO1KCJ_zB0QVPnlGyxmB9VXSfGbmTI",
  authDomain: "booksharingapp-3c773.firebaseapp.com",
  projectId: "booksharingapp-3c773",
  storageBucket: "booksharingapp-3c773.appspot.com",
  messagingSenderId: "759121087061",
  appId: "1:759121087061:web:c5968bfba95ee3a34762dc",
  measurementId: "G-F64VQP3G01"
};

if (!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

// let img_url = [`https://firebasestorage.googleapis.com/v0/b/booksharingapp-3c773.appspot.com/o/`,`img`, `?alt=media&token=309837a9-a694-485c-bcd4-910509d57549`]

export {firebase, firebaseConfig};