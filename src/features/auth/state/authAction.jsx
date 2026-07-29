import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/config/axiosInstance";

export let loginUser = createAsyncThunk("auth/login",async (credentials,thunkApi) => {
    try {
        let res = await axiosInstance.post("/auth/login",credentials);
        return res.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})

export let registerUser = createAsyncThunk("auth/register",async (credentials,thunkApi) => {
    try {
        let res = await axiosInstance.post('/auth/register',credentials);
        return res.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
});

export let userDetails = createAsyncThunk("auth/me",async (_,thunkApi) => {
    try {
        let res = await axiosInstance.get("/auth/me");
        console.log(res)
        return res.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})