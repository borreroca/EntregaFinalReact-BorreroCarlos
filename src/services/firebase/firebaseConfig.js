import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtyjlScY63rI_o3DNvQ3B-5akVYXRJRUw",
  authDomain: "proyectoreactcoder-borrerocar.firebaseapp.com",
  projectId: "proyectoreactcoder-borrerocar",
  storageBucket: "proyectoreactcoder-borrerocar.appspot.com",
  messagingSenderId: "726835061659",
  appId: "1:726835061659:web:cd1d2e5832c4f99b73773e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);