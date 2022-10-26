import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import repositoryReducer from './slices/repositorySlice';
import userReducer from './slices/userSlice';
const makeStore = () => configureStore({
    reducer: {
        repository: repositoryReducer,
        user: userReducer
    },
    devTools: true
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);