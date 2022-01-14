import {
    CREATE_POST_TITLE,
    CREATE_POST_BODY,
    SET_POST_ID,
    FETCH_POSTS,
    SET_USER_ID,
    ADD_POST,
    CHANGE_POST_TITLE,
    CHANGE_POST_BODY
} from '../actionType/postType'

const initialState = {
    title: '',
    body: '',
    id: null,
    userId: '',
    usersPostListInitialState: [],
    postListInitialState: []
}


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST_TITLE: {
            return {
                ...state,
                title: action.payload
            }
        }
        case CREATE_POST_BODY: {
            return {
                ...state,
                body: action.payload
            }
        }
        case SET_POST_ID: {
            return {
                ...state,
                id: action.payload
            }
        }
        case SET_USER_ID: {
            return {
                ...state,
                userId: action.payload
            }
        }
        case ADD_POST: {
            return {
                ...state,
                usersPostListInitialState: [...state.usersPostListInitialState, action.payload]
            }
        }
        case FETCH_POSTS: {
            return {
                ...state,
                postListInitialState: action.payload
            }
        }
        case CHANGE_POST_TITLE: {
            return {
                ...state,
                usersPostListInitialState: state.usersPostListInitialState.map(post =>{
                    if(post.id === action.payload.id){
                        post.title = action.payload.title
                    }
                })
            }
            
        }
        case CHANGE_POST_BODY: {
            return {
                ...state,
                usersPostListInitialState: state.usersPostListInitialState.map(post =>{
                    if(post.id === action.payload.id){
                        post.body = action.payload.body
                    }
                })
            }
        }
        default:
            return state
    }
}
export default postsReducer;