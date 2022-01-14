import { SET_POST_ID } from '../actionType/postType'

export const setPostIdAction =(element)=>{
    return {
        type: SET_POST_ID,
        payload: element
    };
};