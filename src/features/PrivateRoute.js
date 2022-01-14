import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useLogin } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    
    const {currentUser} = useLogin();
    
    return (
            currentUser ?
                children : 
                <Navigate to='/login' />
    )
}

export default PrivateRoute
