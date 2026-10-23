import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import auth from "../firebase";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const logout =()=>{
    return signOut(auth)
  }
  const login =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, signUp, logout,login,resetPassword }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
//
export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
