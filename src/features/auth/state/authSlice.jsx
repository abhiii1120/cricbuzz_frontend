import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, userDetails } from "./authAction";

const addAuthCase = (builder,thunk) => {
    builder.addCase(thunk.pending , (state) => {
        state.isloading = true;
    }).addCase(thunk.fulfilled,(state,action) => {
        state.user = action.payload;
        state.isloading = false;
    }).addCase(thunk.rejected,(state) => {
        state.user = false;
    })
}

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
    addAuthCase(builder,loginUser);
    addAuthCase(builder,registerUser);
    addAuthCase(builder,userDetails);
  },
});

let { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
