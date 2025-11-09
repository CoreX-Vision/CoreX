import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9eCKMwnaT-d3DrbIBd5MNNdgWrSIueI8",
  authDomain: "rimshadbs-47eaa.firebaseapp.com",
  databaseURL:
    "https://rimshadbs-47eaa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rimshadbs-47eaa",
  storageBucket: "rimshadbs-47eaa.appspot.com",
  messagingSenderId: "995669918476",
  appId: "1:995669918476:web:584fab079e0064b9163f29",
  measurementId: "G-PRV571L3XB",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };
