import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

const failedAttemptsSlice = createSlice({
    name: 'failedAttempts',
    initialState,
    reducers: {
        incrementFailedAttempts: (state) => {
            state.count += 1;
        },
        resetFailedAttempts: (state) => {
            state.count = 0;
        },
    },
});

export const {
    incrementFailedAttempts,
    resetFailedAttempts,
} = failedAttemptsSlice.actions;

export const selectFailedAttempts = (state) => state.failedAttempts.count;

export default failedAttemptsSlice.reducer;
