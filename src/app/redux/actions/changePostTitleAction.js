import {CHANGE_POST_TITLE} from '../actionType/postType'

export const changePostTitleAction = (element) => {
    return {
        type: CHANGE_POST_TITLE,
        payload: element
    };
};