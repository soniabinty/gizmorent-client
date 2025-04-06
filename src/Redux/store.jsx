import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import failedAttemptsReducer from './failedAttemptsSlice';
import gadgetReducer from "./Feature/gadgetSlice";
import reviewReducer from "./Feature/reviewSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        gadgets: gadgetReducer,
        failedAttempts: failedAttemptsReducer,
        reviews: reviewReducer,
    },
});

export default store;
