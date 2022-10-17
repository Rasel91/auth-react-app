
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXpWsIKNU7lakbp8OTje_peR5xRrRlkxg",
    authDomain: "auth--react-app.firebaseapp.com",
    projectId: "auth--react-app",
    storageBucket: "auth--react-app.appspot.com",
    messagingSenderId: "608328799369",
    appId: "1:608328799369:web:93ff7becaae4add1832258"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;