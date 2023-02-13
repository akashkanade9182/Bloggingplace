import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBf4AYqLRP8Ejq0AlpXkizn2K3qJEac5hI",
  authDomain: "fir-91121.firebaseapp.com",
  projectId: "fir-91121",
  storageBucket: "fir-91121.appspot.com",
  messagingSenderId: "312157658450",
  appId: "1:312157658450:web:5229f3d3fe86843abc2e8b",
  measurementId: "G-PDT5D32WDG"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app,"gs://fir-91121.appspot.com");
export default storage;