import { createSlice } from "@reduxjs/toolkit"
import type { IUser } from "./types"
import { checkAuth, login, logout, registration } from "./AuthThunks";

interface UserState {
    user: IUser,
    isAuth: boolean,
    isLoading: boolean,
    error: string,
}

const initialState: UserState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // login
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.user = action.payload.user;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            // registration
            .addCase(registration.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.user = action.payload.user;
            })
            .addCase(registration.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            // logout
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuth = false;
                state.user = {} as IUser;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            // checkAuth
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.user = action.payload.user;
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.user = {} as IUser;
                state.error = action.payload as string;
            });
    },
})

export const { clearError } = userSlice.actions;
export default userSlice.reducer;