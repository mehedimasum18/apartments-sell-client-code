
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

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

  // sign in with google
  const googleSignIn = (history, location) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setError("");
        const redirect_uri = location?.state?.from || "/";
        const user = result.user;
        history.push(redirect_uri);
      })
      .catch((err) => {
        setError("");
        console.log(err);
      });
  };

  const logOut = () => {
    return signOut(auth);
  };
  // admin access
  useEffect(() => {
    axios
      .get("https://radiant-wildwood-26012.herokuapp.com/admin")
      .then((res) => {
        const adminEmail = res.data;
        const matchAdmin = adminEmail.find(
          (adEmail) => adEmail.email == currentUser?.email
        );
        setAdmin(matchAdmin?.email);
      });
  }, [currentUser?.email]);

  return {
    admin,
    currentUser,
    isLoading,
    error,
    setIsLoading,
    setCurrentUser,
    googleSignIn,
    setError,
    signUp,
    logIn,
    logOut,
  };
};

export default useFirebase;