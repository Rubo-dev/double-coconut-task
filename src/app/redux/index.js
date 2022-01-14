import {applyMiddleware, combineReducers, createStore} from "redux";
import {posts} from "./reducers/postReducer";
import thunk from "redux-thunk";
import {changedPosts} from "./reducers/changePostReducer";



export const state = createStore(
    combineReducers({
        post: posts,
        changedPosts: changedPosts

    }),
    applyMiddleware(thunk));
