
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGlJAxV-RPR16FjHjHX9WHtUNamiyfUVY",
  authDomain: "difm-law.firebaseapp.com",
  projectId: "difm-law",
  storageBucket: "difm-law.appspot.com",
  messagingSenderId: "66111685114",
  appId: "1:66111685114:web:5db517fca847978f3c6443",
  measurementId: "G-S5ZD0622Y6"
};

export  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);