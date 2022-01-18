import { 
    CHANGE_USER_MAIL, 
    CHANGE_USER_NAME, 
    CHANGE_USER_COMPANY, 
    CHANGE_USER_LASTNAME 
} from "../actionType/userType";


export const changeUserNameAction = userName => {
    return {
        type: CHANGE_USER_NAME,
        payload: userName
    };
};

export const changeUserLastNameAction = lastName => {
    return {
        type: CHANGE_USER_LASTNAME,
        payload: lastName
    };
};


export const changeUserEmail = email => {
    return {
        type: CHANGE_USER_MAIL,
        payload: email
    };
};

export const changeUserCompany = company => {
    return {
        type: CHANGE_USER_COMPANY,
        payload: company
    };
};