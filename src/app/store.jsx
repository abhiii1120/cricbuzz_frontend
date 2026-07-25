import {configureStore}  from '@reduxjs/toolkit'
import authSlice from '../features/auth/state/authSlice';
export let store = configureStore({
    reducer:{
        auth:authSlice
    }
})

