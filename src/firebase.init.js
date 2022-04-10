
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDk2tCAQyH1rQPKFlw38kzwUowMrtw29P8",
  authDomain: "ema-john-shopping-36d19.firebaseapp.com",
  projectId: "ema-john-shopping-36d19",
  storageBucket: "ema-john-shopping-36d19.appspot.com",
  messagingSenderId: "244493218806",
  appId: "1:244493218806:web:4b6751221975dbd7570dd7",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
