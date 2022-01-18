import {
    DELETE_POST, 
    CHANGE_POST_BODY,
    ADD_POST,
    CREATE_POST_BODY,
    CREATE_POST_TITLE,
    SET_POST_ID
} from '../actionType/postType';

export const setPostIdAction =(element)=>{
    return {
        type: SET_POST_ID,
        payload: element
    };
};

export const createPostTitleAction = postTitle => {
    return {
        type: CREATE_POST_TITLE,
        payload: postTitle
    };
};

export const createPostBodyAction = postBody => {
    return {
        type: CREATE_POST_BODY,
        payload: postBody
    };
};

export const addPostAction = post => {
    return {
        type: ADD_POST,
        payload: post
    };
};


export const deletePostAction = post =>{
    return {
        type: DELETE_POST,
        payload: post
    };
}

export const changePostBodyAction = postBody => {
    return {
        type: CHANGE_POST_BODY,
        payload: postBody
    };
};
