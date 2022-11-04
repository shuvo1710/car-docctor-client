import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, }  from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading,SetLoading] = useState(true)


    const createUser = (email,password)=>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const loginUser = (email,password)=>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        signOut(auth)
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
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;