import { CHANGE_POST_TITLE, CHANGE_POST_BODY } from '../actionType/postType'

const initialState = {
    title: '',
    body: '',
    id: null,
    userId: '',
    usersPostListInitialState: [],
}

export const changedPosts = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POST_TITLE:{
            return {
                ...state,
                title: action.payload
            }
        }
        default:
            return state
    }
}
