/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (user, name, photoUrl) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (curentUser) => {
      const userEmail=curentUser?.email || user?.email;
        const loggedUser = { email:userEmail };
      setUser(curentUser);
      setLoading(false);

      if(curentUser){
      axios
          .post("https://online-job-portal-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
          
        }else{
           axios.post('https://online-job-portal-server.vercel.app/logout',loggedUser,{
            withCredentials:true,
           })
           .then(res=>{
               console.log(res.data)
           })
        }
    });
      
      return ()=>{
         return unSubscribe();
      }
     
  }, [user]);

  const authInfo = {
    createUser,
    updateUser,
    logIn,
    googleSignIn,
    user,
    loading,
    logOut,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
