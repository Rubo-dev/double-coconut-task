import {SET_USER_ID} from '../actionType/postType'

export const setUserIdAction = (element) => {
    return {
        type: SET_USER_ID,
        payload: element
    };
};