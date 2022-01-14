import axios from "axios";
import {FETCH_POSTS} from '../actionType/postType'

export const fetchPosts = () => {
    return async (dispatch) => {
        const res = await axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/posts"
        })
        dispatch({
            type: FETCH_POSTS,
            payload: res.data
        })
    };
}