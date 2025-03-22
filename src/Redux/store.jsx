import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import gadgetReducer from "./Feature/gadgetSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        gadgets: gadgetReducer,
    },
});

export default store;
