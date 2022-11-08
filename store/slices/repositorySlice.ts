import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppThunk } from '../store';

export const RepositorySlice = createSlice({
    name: "repository",
    initialState: {
        // todo: hacer esto mismo con el usuario
        repositories: [],
    },
    reducers: {
        setRepositoriesData: (state, action) => {
            state.repositories = action.payload;
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {

            if (!action.payload.repository.repositories) {
                return state;
            }

            state.repositories = action.payload.repository.repositories;

        },
    }

})

export const fetchRepoData =
    (): AppThunk =>
        async dispatch => {
            const resp = await fetch('https://api.github.com/users/ichrisdev/repos')
            const repositories = JSON.parse(JSON.stringify(await resp.json()));

            dispatch(
                setRepositoriesData(repositories)
            );
        };

export const { setRepositoriesData } = RepositorySlice.actions;


export default RepositorySlice.reducer;
