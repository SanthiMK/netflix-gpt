// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMgXIxUX1hZvqs5KAsjU-YD298p7V_Xko",
  authDomain: "netflixgptapp-15738.firebaseapp.com",
  projectId: "netflixgptapp-15738",
  storageBucket: "netflixgptapp-15738.firebasestorage.app",
  messagingSenderId: "973412408056",
  appId: "1:973412408056:web:f82c6438d2442569ad790d",
  measurementId: "G-J5NFZNRC51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

