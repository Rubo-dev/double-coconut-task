import React,{useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../assets/elements/signUp.scss'

import { useLogin } from '../../contexts/AuthContext';
import {useDispatch, useSelector} from "react-redux";
import {changeUserNameAction} from "../../app/redux/actions/userChangeNameAction";
import {changeUserLastNameAction} from "../../app/redux/actions/userChangeLastNameAction";

function SignUp() {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const companyNameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')

    const userData = useSelector(state => state)
    const dispatch = useDispatch();

    const { signUp } = useLogin();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const pattern = new RegExp(/[a-zA-Z]+(?=.{6})/);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
            return setError('Passwords do not match.');
        }
        if(!pattern.test(passwordRef.current.value)){
            return setError('Password should cointain at least 6 symbols.');
        }
       
        try {
            setError('');
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
            dispatch(changeUserNameAction(firstName))
            dispatch(changeUserLastNameAction(lastName))
            console.log(`You have been signed in ${firstNameRef.current.value} ${lastNameRef.current.value}`)
            navigate("/")
        } catch(error) {
            console.log(error);
            setError('Failed to create an account');
        }

        setLoading(false);
    };

    return (
        <div className="container">
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login_block">
                        <div className="title_block">
                            <h1>Authorisation</h1>
                        </div>
                        <div className="login-inputs-block">
                            {
                                error && <p className = "error_container">{error}</p>
                            }
                            <div className="login_container">
                                <div className='input'>
                                    <label>First Name</label>
                                    <input type="firstName" ref={firstNameRef} value={firstName} onChange={e=>setFirstName(e.target.value)} required/>
                                </div>
                                <div className='input'>
                                    <label>Last Name</label>
                                    <input type="lastName" ref={lastNameRef} value={lastName} onChange={e=>setLastName(e.target.value)} required/>
                                </div>
                                <div className='input'>
                                    <label>Email</label>
                                    <input type="email" ref={emailRef} required />
                                </div>
                                <div className='input'>
                                    <label>Company Name</label>
                                    <input type="companyName" ref={companyNameRef} required/>
                                </div>
                                <div className='input'>
                                    <label>Password</label>
                                    <input type="password" ref={passwordRef} required />
                                </div>
                                <div className='input'>
                                    <label>Password Confirmation</label>
                                    <input type="password" ref={passwordConfirmRef} required />
                                </div>
                            </div>
                            <div className="btn_cont">
                                <button className="login_btn" disabled={loading} type="submit">Sign up</button>
                            </div>
                            <div className="login_cont">
                                <h3>Already have an account ? <Link to='/login' > Log in</Link></h3>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    );
}

export default SignUp;
