import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../service/auth/authSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer
    },
});