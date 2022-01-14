import {CREATE_POST_BODY} from '../actionType/postType'

export const createPostBodyAction = (element) => {
    return {
        type: CREATE_POST_BODY,
        payload: element
    };
};