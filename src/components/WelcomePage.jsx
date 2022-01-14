import React from 'react'
import {Link} from 'react-router-dom';
import {useLogin} from '../contexts/AuthContext';
import '../App.scss'
import Header from './Header';

const WelcomePage = () => {

    const {currentUser} = useLogin();

    return (
        <>
            <Header/>
            <div className='container'>
                <h1>Welcome to our Blog page</h1>
                {!currentUser ?
                    <h2 className='text-center'>Please
                        <Link to="/login"> sign in</Link>
                    </h2> : ''
                }
            </div>
        </>
    )
}

export default WelcomePage;
