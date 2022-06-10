import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        info: null,
        cart: null,
        isFetching: false,
        error: false,
        errorCode: 0
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
            state.error = false;
            state.errorCode = 0;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.errorCode = 0;
            state.info = action.payload;
            console.log(state.info);
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorCode = action.payload;
        },
        update: (state, action) => {
            state.info = action.payload.user;
            state.cart = action.payload.cart;
            console.log(state.info);
        }
    }
});

export const {loginStart, loginSuccess, loginFailure, update} = userSlice.actions;
export default userSlice.reducer;

/*
export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: null,
        email: null
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        remove: (state) => {
          state.name = null;
          state.email = null;
        }
    }
});

export const {update, remove} = userSlice.actions;
export default userSlice.reducer;
*/