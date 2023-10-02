// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyAYzZbHjQhnARnkRVzxkRl4MVxFgUbHah0",
  authDomain: "admin-678e5.firebaseapp.com",
  projectId: "admin-678e5",
  storageBucket: "admin-678e5.appspot.com",
  messagingSenderId: "111306833116",
  appId: "1:111306833116:web:aa93cd8d193e4486110819"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
