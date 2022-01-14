import {CHANGE_USER_LASTNAME} from "../actionType/userType";

export const changeUserLastNameAction = (element) => {
    return {
        type: CHANGE_USER_LASTNAME,
        payload: element
    };
};