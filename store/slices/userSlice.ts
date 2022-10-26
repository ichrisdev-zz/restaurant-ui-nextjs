import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        username: ''
    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.username = action.payload.username;
        }
    }

})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;