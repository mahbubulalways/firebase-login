import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    const [loading,setLOading]=useState(true)
    const auth = getAuth(app);
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const signInUser=(email,password)=>signInWithEmailAndPassword(auth,email,password)
    const signOutUser=()=>{
       return signOut(auth)
        
    }
    //observe auth state change
    useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log('auth state change',currentUser);
        setUser(currentUser)
        setLOading(false)
    });
    return ()=> unsubscribe();
    },[])

    const googleLogIn=()=>{
    signInWithPopup(auth,googleProvider)
    }


   const authInfo={
    user,
    createUser,
    signInUser,
    signOutUser,
    loading,
    googleLogIn
   }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;