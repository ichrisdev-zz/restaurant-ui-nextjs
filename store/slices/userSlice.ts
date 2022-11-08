import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        userName: '',
        phoneNumber: '',
        password: '',
        fk_Rol: '',

    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.userName = action.payload.userName;
            state.phoneNumber = action.payload.phoneNumber;
            state.password = action.payload.password;
            state.fk_Rol = action.payload.fk_Rol;
        }





    },




})


export const { setUser } = userSlice.actions;

export default userSlice.reducer;