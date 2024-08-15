import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const goolgeSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {withCredentials: true})
    console.log(data)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  const getToken = async (email) => {
    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {email}, {withCredentials: true})
    console.log(data)
    
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setLoading(false)
        setUser(currentUser)
        if(currentUser){
          getToken(currentUser?.email)
        }

    })
    return () => {
        return unSubscribe()
    }
  },[])

  const authInfo = { user, loading,logOut, createUser, logIn, goolgeSignIn, updateUserProfile };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
