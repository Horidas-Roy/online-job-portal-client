import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext=createContext();

const AuthProvider = ({children}) => {
       const [user,setUser]=useState();
       const [loading,setLoading]=useState(false);
       const googleProvider=new GoogleAuthProvider();

      const createUser=(email,password)=>{
           setLoading(true);
           return createUserWithEmailAndPassword(auth,email,password)
      }

      const updateUser=(user,name,photoUrl)=>{
        return updateProfile(user,{
            displayName:name,
            photoURL:photoUrl
        });
      }

      const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }

      const googleSignIn=()=>{
        setLoading(true)
         return signInWithPopup(auth,googleProvider)
      }

      const logOut=()=>{
        setLoading(true)
        return signOut(auth)
      }

      useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(curentUser)=>{
             setUser(curentUser);
             setLoading(false);
        })
        return ()=>{
            return unSubscribe();
        }
      },[])

    const authInfo={
        createUser,
        updateUser,
        logIn,
        googleSignIn,
        user,
        loading,
        logOut,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;