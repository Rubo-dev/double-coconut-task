import React,{useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/elements/signUp.scss'
import { useLogin } from '../../contexts/AuthContext';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const { login } = useLogin();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/")
        } catch {
            setError('Failed to sign in');
        }
        setLoading(false);
    };

    return (
        <div className="container">
            <div className="card">
                <form className="login__form" onSubmit={handleSubmit}>
                    <h2>Log in</h2>
                    {
                        error && <p className = "error_container">{error}</p>
                    }
                    <div className="login_container">
                        <div className='input'>
                            <label>Email</label>
                            <input type="email" ref={emailRef} required />
                        </div>
                        <div className='input'>
                            <label>Password</label>
                            <input type="password" ref={passwordRef} required />
                        </div>
                    </div>
                    <button disabled={loading} type="submit">Log in</button>
                </form>
                <div className="login_container">
                    <h3>Need an account ? <Link to='/signup' > Sign up</Link></h3>
                </div>
            </div>
        </div>
    );
}

export default Login;
