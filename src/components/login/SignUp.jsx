import React,{useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/elements/signUp.scss'
import { useLogin } from '../../contexts/AuthContext';

function SignUp() {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const companyNameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { signUp, addNewUser } = useLogin();

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
            // await addNewUser({
            //     firstName: firstNameRef.current.value,
            //     lastName: lastNameRef.current.value,
            //     email: emailRef.current.value,
            //     company: companyNameRef.current.value
            // })
            console.log('You have been signed in')
            navigate("/")
        } catch(error) {
            console.log(error);
            setError('Failed to create an account');
        }

        setLoading(false);
    };

    return (
        <div className="container">
            <div className="card">
                <form className="login__form" onSubmit={handleSubmit}>
                    <h2>Authorisation</h2>
                    {
                        error && <p className = "error_container">{error}</p>
                    }
                    <div className="login_container">
                        <div className='input'>
                            <label>First Name</label>
                            <input type="firstName" ref={firstNameRef} required/>
                        </div>
                        <div className='input'>
                            <label>Last Name</label>
                            <input type="lastName" ref={lastNameRef} required/>
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
                    <button disabled={loading} type="submit">Sign up</button>
                </form>
                <div className="login_container">
                    <h3>Already have an account ? <Link to='/login' > Log in</Link></h3>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
