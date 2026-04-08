import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBtMLMQAA4dyWj_4Wffatb6Z5YnjVIYaqo",
  authDomain: "react-js-blog-website-1db43.firebaseapp.com",
  projectId: "react-js-blog-website-1db43",
  storageBucket: "react-js-blog-website-1db43.firebasestorage.app",
  messagingSenderId: "857980618382",
  appId: "1:857980618382:web:a3cf7b3a1c32a4ed346bdf"
};

const app = initializeApp(firebaseConfig);

//google auth

const provider = new GoogleAuthProvider()

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}