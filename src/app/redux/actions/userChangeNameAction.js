import {CHANGE_USER_NAME} from "../actionType/userType";

export const changeUserNameAction = (element) => {
    return {
        type: CHANGE_USER_NAME,
        payload: element
    };
};