import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        userName: '',
        phoneNumber: '',
        password: '',
        fk_Rol: '2',

    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.userName = action.payload.userName;
            state.phoneNumber = action.payload.phoneNumber;
            state.password = action.payload.password;
        }
    }

})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;