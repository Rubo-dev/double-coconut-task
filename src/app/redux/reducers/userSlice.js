import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: 'Joe',
    lastName: 'Doe',
    email: 'john@mail.org',
    company: 'JohnDoe'
}


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        editUser: (state, action) =>{
            switch (action.type){
                case 'FIRST_NAME':
                    return state.firstName = action.payload.firstName
                case 'LAST_NAME':
                    return state.firstName = action.payload
                default:
                    return state
            }
            // state.firstName = action.payload
        }
    }
})

export const { editFirstName } = userSlice.actions;

// // export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
