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

// Helper function to transform Firebase user object to a serializable format
const transformUser = (user) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    providerId: user.providerId,
});

// Async Thunks for Firebase Actions
export const registerUser = createAsyncThunk("auth/register", async ({ name, email, password, photoURL }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name, photoURL });
    console.log("User registered successfully:", userCredential.user);
    return transformUser(userCredential.user);
});

export const loginUser = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully:", userCredential.user);
        return transformUser(userCredential.user);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
    const userCredential = await signInWithPopup(auth, googleProvider);
    console.log("User logged in with Google successfully:", userCredential.user);
    return transformUser(userCredential.user);
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
    await signOut(auth);
    console.log("User logged out successfully");
});

export const updateUserProfile = createAsyncThunk("auth/updateProfile", async ({ name, photo }) => {
    if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
        console.log("User profile updated successfully:", auth.currentUser);
        return { displayName: name, photoURL: photo };
    }
});

// Auth Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        failedAttempts: 0,
        isLocked: false,
        lockExpiration: null,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
        incrementFailedAttempts: (state) => {
            state.failedAttempts += 1;
            if (state.failedAttempts >= 3) {
                state.isLocked = true;
                state.lockExpiration = Date.now() + 5 * 60 * 1000; // Lock for 5 minutes
            }
        },
        resetFailedAttempts: (state) => {
            state.failedAttempts = 0;
            state.isLocked = false;
            state.lockExpiration = null;
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
                state.failedAttempts = 0;
                state.isLocked = false;
                state.lockExpiration = null;
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
                state.failedAttempts = 0;
                state.isLocked = false;
                state.lockExpiration = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.failedAttempts += 1;
                if (state.failedAttempts >= 3) {
                    state.isLocked = true;
                    state.lockExpiration = Date.now() + 5 * 60 * 1000; // Lock for 5 minutes
                }
            })
            .addCase(googleLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.failedAttempts = 0;
                state.isLocked = false;
                state.lockExpiration = null;
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

export const { setUser, clearUser, incrementFailedAttempts, resetFailedAttempts } = authSlice.actions;
export default authSlice.reducer;