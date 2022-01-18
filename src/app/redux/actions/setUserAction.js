import { SET_USER, SET_USER_ID } from "../actionType/userType";

export const setUserIdAction = id => {
    return {
        type: SET_USER_ID,
        payload: id
    };
};

export const setUserAction = ({firstName, lastName, company, email}) => {
    return {
        type: SET_USER,
        payload: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            company: company
        }
    };
};