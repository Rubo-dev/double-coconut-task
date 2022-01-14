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
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login_block">
                        <div className="title_block">
                            <h2>Log in</h2>
                        </div>
                        <div className="login-inputs-block">
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
                            <div className="btn_cont">
                                <button className="login_btn" disabled={loading} type="submit">Log in</button>
                            </div>
                            <div className="login_cont">
                                <h3>Need an account ? <Link to='/signup' > Sign up</Link></h3>
                            </div>
                        </div>
                    </div>
                </form>

        </div>
    );
}

export default Login;
