import {
    CHANGE_USER_COMPANY,
    CHANGE_USER_LASTNAME, 
    CHANGE_USER_MAIL, 
    CHANGE_USER_NAME, 
    SET_USER
} from "../actionType/userType";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    company: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER :{
            return{
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                company: action.payload.company,
            }
        }
        case CHANGE_USER_NAME: {
            return {
                ...state,
                firstName: action.payload
            }
        }
        case CHANGE_USER_LASTNAME: {
            return {
                ...state,
                lastName: action.payload
            }

        }
        case CHANGE_USER_MAIL: {
            return {
                ...state,
                email: action.payload
            }
        }
        case CHANGE_USER_COMPANY: {
            return {
                ...state,
                email: action.payload
            }
        }
        default:
            return state
    }
}
export default userReducer;
