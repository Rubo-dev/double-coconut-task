import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    title: '',
    body: '',
    id: null,
    userId: null
}]

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) =>{
            state.posts.push(action.payload)
            console.log('post added');
            console.log(state.posts);
        },
        editPost: (state, action) => {
            state.posts.map(post =>{
                if(post.id === action.payload.id){
                    post.post = action.payload.post
                }
            });
        }
    }
})

export const { addPost, editPost} = postSlice.actions;

export default postSlice.reducer