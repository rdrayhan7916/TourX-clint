import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialixetion = () => {
    initializeApp(firebaseConfig);
}

export default initialixetion