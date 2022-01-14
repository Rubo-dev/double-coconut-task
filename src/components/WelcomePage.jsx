import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../contexts/AuthContext';
import '../App.scss'
import Header from './Header';

const WelcomePage = () => {

    const [error, setError] = useState('');
    const { currentUser } = useLogin();

    const handleLogout = () =>{

    }

    return (
        <>
        <Header />
            <div className='container'>
                <div className="card">
                    <h1>Welcome to our Blog page</h1>
                    {!currentUser ? 
                        <h2 className='text-center'>Please 
                            <Link to = "/login"> sign in</Link>
                        </h2> : ''   
                    }
                   
                </div>
            </div>
        </>
    )
}

export default WelcomePage;
