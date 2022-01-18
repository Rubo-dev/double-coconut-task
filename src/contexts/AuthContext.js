import React, { useEffect, useState, useContext } from 'react';
import { auth } from '../firebase'

const AuthContext = React.createContext()

export const useLogin = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    const [loading, setLoading] = useState(true);

    function signUp (email, password)  {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login (email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        auth.signOut();
    }

    useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
        setCurrentUser(user)
        setLoading(false)
        })
        return unsubscribe
    },[])

    const value = {
        currentUser,
        signUp,
        login,
        logout,
    }

    return (
       <AuthContext.Provider value={value}>
        {!loading && children}
       </AuthContext.Provider>
    )
}
