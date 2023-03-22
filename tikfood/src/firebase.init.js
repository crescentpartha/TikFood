// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_ELUaiK5Qz4GXQfzYhuR8L2srVHfqD5g",
  authDomain: "tikfood-61d96.firebaseapp.com",
  projectId: "tikfood-61d96",
  storageBucket: "tikfood-61d96.appspot.com",
  messagingSenderId: "1036061767338",
  appId: "1:1036061767338:web:d390e2ef811815c92b42d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;