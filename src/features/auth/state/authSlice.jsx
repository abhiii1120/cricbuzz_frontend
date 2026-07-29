import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authAction";

let authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isloading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isloading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isloading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isloading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isloading = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isloading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isloading = false;
      });
  },
});

let { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
