// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiIkA9yRTGnYps2txpLPe2Q7sIZhTEJso",
  authDomain: "gratitude-a3e3d.firebaseapp.com",
  projectId: "gratitude-a3e3d",
  storageBucket: "gratitude-a3e3d.appspot.com",
  messagingSenderId: "925155652267",
  appId: "1:925155652267:web:b35565be0efb7696647dee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}