import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import gadgetReducer from "./Feature/gadgetSlice";
import reviewReducer from "./Feature/reviewSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    gadgets: gadgetReducer,
    reviews: reviewReducer,
  },
});

export default store;
