// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArfv-Y8eqDEcMNqhyp9fl9Z_eal6Ueq4o",
  authDomain: "event-agency-project.firebaseapp.com",
  projectId: "event-agency-project",
  storageBucket: "event-agency-project.appspot.com",
  messagingSenderId: "371703258540",
  appId: "1:371703258540:web:1dcec51662d29096ce2e09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;