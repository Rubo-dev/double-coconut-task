import {CREATE_POST_TITLE} from '../actionType/postType'

export const changePostTitleAction = (element) => {
    return {
        type: CREATE_POST_TITLE,
        payload: element
    };
};