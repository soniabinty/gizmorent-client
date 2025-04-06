import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import failedAttemptsReducer from './failedAttemptsSlice';
import gadgetReducer from "./Feature/gadgetSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        gadgets: gadgetReducer,
        failedAttempts: failedAttemptsReducer,
    },
});

export default store;
