import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import gadgetReducer from "./Feature/gadgetSlice";
import reviewReducer from "./Feature/reviewSlice";
import checkoutReducer from "./Feature/checkoutSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    gadgets: gadgetReducer,
    reviews: reviewReducer,
    checkout: checkoutReducer,
  },
});

export default store;
