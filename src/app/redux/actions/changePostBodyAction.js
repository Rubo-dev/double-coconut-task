import {CHANGE_POST_BODY} from '../actionType/postType'

export const changePostBodyAction = (element) => {
    
    return {
        type: CHANGE_POST_BODY,
        payload: element
    };
};