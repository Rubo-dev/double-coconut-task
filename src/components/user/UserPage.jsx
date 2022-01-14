import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogin } from '../../contexts/AuthContext';
import Header from '../Header';
import {changeUserNameAction} from "../../app/redux/actions/userChangeNameAction";
import {changeUserLastNameAction} from "../../app/redux/actions/userChangeLastNameAction";

const UserPage = () => {
  
    const users = useSelector(state => state);

    const {currentUser} = useLogin();

    const [firstName, setUserName] = useState(users.firstName);

    const [lastName, setLastName] = useState(users.lastName);

    const dispatch = useDispatch();

    console.log(users)

    const handleFirstNameChange = () =>{
        dispatch(changeUserNameAction(firstName))
    }

    const handleLastNameChange = () =>{
        dispatch(changeUserLastNameAction(firstName))
    }

    return (
        <>
            <Header />
            <div>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <div>
                    <div>
                        <input type="text" value={firstName} onChange={e => setUserName(e.target.value)}/>
                        <button onClick={handleFirstNameChange}>Edit Name</button>
                    </div>
                    <div>
                        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
                        <button onClick={handleLastNameChange}>Edit Last Name</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPage;
