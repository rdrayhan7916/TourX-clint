
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    OAuthProvider,
} from "firebase/auth";

import { useEffect, useState } from "react";
import initialixetion from "../Components/firebase/firebase.init";

initialixetion()

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const appleProvider = new OAuthProvider('apple.com');

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);

                // console.log(result.user);
                setError("");
            })
            .catch((error) => setError(error.message));
        console.log(error)
    };
    const handleAppleLogin = () => {
        signInWithPopup(auth, appleProvider)
            .then((result) => {
                setUser(result.user);

                // console.log(result.user);
                setError("");
            })
            .catch((error) => setError(error.message));
        console.log(error)
    };


    const [user, setUser] = useState({});
    const [error, setError] = useState("");




    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return {
        handleGoogleLogin,
        user,
        handleLogout,
        handleAppleLogin
    };
};

export default useFirebase;