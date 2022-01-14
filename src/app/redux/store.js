import { combineReducers, createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer  from "./reducers/postReducer";
import  userReducer  from "./reducers/userReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
