import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogin } from '../../contexts/AuthContext';
import userSlice  from '../../app/redux/reducers/userSlice';
import Header from '../Header';

const UserPage = () => {
  
    const users = useSelector(state => state.users);

    const dispatch = useDispatch();
    
    // const { editFirstName } = userSlice.actions;
    
    const [firstName, setUserName] = useState(users.firstName);

    const [lastName, setLastName] = useState(users.lastName);

    const {currentUser} = useLogin();

    const handleFirstNameChange = () =>{
        dispatch(setUserName(firstName))
    }

    const handleLastNameChange = () =>{
        // dispatch(editUser(firstName))
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
