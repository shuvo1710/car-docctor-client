import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, }  from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading,SetLoading] = useState(true)


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            SetLoading(false)
        })
        return ()=>{
            unSubscribe()
            
        }
        
    },[])



    const AuthInfo = {
        user,
        loading,
        createUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;