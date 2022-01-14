import React, { useEffect, useState, useContext } from 'react';
import { auth, db } from '../firebase'
import { collection } from "firebase/firestore"

const AuthContext = React.createContext()

export const useLogin = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const usersCollection = collection(db, 'users');
 
    function signUp (email, password)  {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    // async function addNewUser(state) {
    //     console.log(state);
    //     const newUser = await addDoc(usersCollection, {
    //         firstName: state.firstName,
    //         lastName: state.lastName,
    //         email: state.email,
    //         company: state.company
    //     });
    //     console.log('user was created');
    // }

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
