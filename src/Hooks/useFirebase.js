import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();



    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Observe User
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {

            };
            setLoading(false);
        });
    }, [auth]);


    const logOut = () => {
        signOut(auth).then(() => {
                setUser({});
            })
            .finally(() => {
                setLoading(false);
            })
    }


    return { user, signInUsingGoogle, logOut, loading }


};

export default useFirebase;