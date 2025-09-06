import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDcidrDS8oU5a3f5ByIiDGCej-8WCcBL6A",   
  authDomain: "kryzox-2212.firebaseapp.com",         
  projectId: "kryzox-2212",                         
  storageBucket: "kryzox-2212.appspot.com",          
  messagingSenderId: "277643674149",              
  appId: "1:277643674149:web:7f3ecd6f09935ff39a75cc" 
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
