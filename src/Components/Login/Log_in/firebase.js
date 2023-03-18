// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo2y_N1_su10dWXeBDUsq1bEV3Hl13DJI",
  authDomain: "pro-bruin-380717.firebaseapp.com",
  projectId: "pro-bruin-380717",
  storageBucket: "pro-bruin-380717.appspot.com",
  messagingSenderId: "984754250838",
  appId: "1:984754250838:web:2d927b7eb3b934788907f7",
  measurementId: "G-DX9HJ4JP3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);