import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import { changeUserNameAction } from "../../app/redux/actions/changeUsersActions";
import { changeUserLastNameAction } from "../../app/redux/actions/changeUsersActions";

const UserPage = () => {
  
    const user = useSelector(state => state.user);

    const [firstName, setUserName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email] = useState(user.email);
    const [company] = useState(user.company);

    const dispatch = useDispatch();

    const userData = JSON.parse(localStorage.getItem('user'))

    let updatedUserData = {
        firstName:firstName || userData.firstName,
        lastName: lastName || userData.lastName,
        email: userData.email,
        company: userData.company
    }

    const handleFirstNameChange = () =>{
        dispatch(changeUserNameAction(firstName))
        localStorage.setItem('user', JSON.stringify(updatedUserData))
    }

    const handleLastNameChange = () =>{
        dispatch(changeUserLastNameAction(lastName))
        localStorage.setItem('user', JSON.stringify(updatedUserData))
    }

    return (
        <>
            <Header />
            <div className='container'>
                <div className='card user_container'>
                    <div className='user_title_block'>
                        <h2>
                            {firstName || userData.firstName}
                        </h2>
                        <input 
                            className='inputs'
                            type="text"
                            value={firstName} 
                            onChange={e => setUserName(e.target.value)}/>
                        <button onClick={handleFirstNameChange}>
                            Save name
                        </button>
                    </div>
                    <div className='user_title_block'>
                        <h2>
                            {lastName || userData.lastName}
                        </h2>
                        <input 
                            className='inputs'
                            type="text" 
                            value={lastName} 
                            onChange={e => setLastName(e.target.value)}/>
                        <button onClick={handleLastNameChange}>
                            Save last name
                        </button>
                    </div>
                    <div className='user_title_block'>
                        <h2>
                            Email: {email || userData.email}
                        </h2>
                    </div>
                    <div className='user_title_block'>
                        <h2>
                           Company: {company || userData.company}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPage;
