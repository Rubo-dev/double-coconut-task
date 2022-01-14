import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../assets/header.scss';
import {useLogin} from '../contexts/AuthContext';


const Header = () => {

    const [user, setUser] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const {logout} = useLogin();


    const handleLogout = async () => {
        setError('')
        try {
            await logout()
            navigate('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    const handleProfile = () => {
        setError('')
        navigate('/profile')
    }

    return (
        <div>
            <header>
                <div className='layout header-block'>
                    <div className="logo-block">
                        <Link to="/">
                            <img src="https://technext.github.io/original/img/core-img/logo.png" alt=""/>
                        </Link>
                    </div>
                    <div className="primary-menu">
                        {!user ?
                            <div>
                                <button onClick={handleProfile}>Profile</button>
                                <button onClick={handleLogout}>Log out</button>
                            </div>
                            : ''
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
