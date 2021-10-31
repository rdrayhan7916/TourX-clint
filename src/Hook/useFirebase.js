import initialixetion from "../Components/firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";
import initialixetion from "../Components/firebase/firebase.init";

initialixetion()

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const [user, setUser] = useState({});
    const [error, setError] = useState("");

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
    };
};

export default useFirebase;