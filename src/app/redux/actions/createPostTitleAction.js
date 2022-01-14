import {CREATE_POST_TITLE} from '../actionType/postType'

export const createPostTitleAction = (element) => {
    return {
        type: CREATE_POST_TITLE,
        payload: element
    };
};