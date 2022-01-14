import {CHANGE_USER_LASTNAME, CHANGE_USER_MAIL, CHANGE_USER_NAME} from "../actionType/userType";

const initialState = {
    firstName: '',
    lastName: '',
    email: 'john@mail.org',
    company: ''
}

const userReducer = (state = initialState, action) => {
    switch (action) {
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
        default:
            return state
    }
}
export default userReducer;
