import {ADD_POST} from '../actionType/postType'

export const addPostAction =(element)=>{
    return {
        type:ADD_POST,
        payload:element
    };
};