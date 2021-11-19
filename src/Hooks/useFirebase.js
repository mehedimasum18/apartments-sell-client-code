
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  // create user with email and password
  const signUp = async (email, password, username, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setCurrentUser({ email, displayName: username });
        setError("");

        // update Profile
        updateProfile(auth.currentUser, {
          displayName: username,
        });
        history.replace("/");
      })
      .catch((err) => {
        setError("Opps!! Filed to create an account");
      })
      .finally(() => setIsLoading(false));
  };

  // login user with email and password

  const logIn = (email, password, history, location) => {
    setIsLoading(true);
    const redirect_uri = location?.state?.from || "/";
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        history.replace(redirect_uri);
      })
      .catch((err) => {
        setError("Opps!! Login failed");
      })
      .finally(() => setIsLoading(false));
  };


  // sign in state observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);

  const logOut = () => {
    return signOut(auth);
  };

  return {
    currentUser,
    isLoading,
    error,
    setIsLoading,
    setCurrentUser,
    setError,
    signUp,
    logIn,
    logOut,
  };
};

export default useFirebase;