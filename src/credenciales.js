// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7c12nlbak8m0RYBRpcLwFpVPdKeo_PMs",
  authDomain: "news-288de.firebaseapp.com",
  projectId: "news-288de",
  storageBucket: "news-288de.appspot.com",
  messagingSenderId: "440404187199",
  appId: "1:440404187199:web:973d72e6786977493e808a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp