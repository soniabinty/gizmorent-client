import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config.js";

const googleProvider = new GoogleAuthProvider();

// Async Thunks for Firebase Actions
export const registerUser = createAsyncThunk("auth/register", async ({ email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
});

export const loginUser = createAsyncThunk("auth/login", async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
});

export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
    const userCredential = await signInWithPopup(auth, googleProvider);
    return userCredential.user;
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
    await signOut(auth);
});

export const updateUserProfile = createAsyncThunk("auth/updateProfile", async ({ name, photo }) => {
    if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
        return { displayName: name, photoURL: photo };
    }
});

// Auth Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(googleLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                if (state.user) {
                    state.user.displayName = action.payload.displayName;
                    state.user.photoURL = action.payload.photoURL;
                }
            });
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;