import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import failedAttemptsReducer from "./failedAttemptsSlice";
import gadgetReducer from "./Feature/gadgetSlice";
import reviewReducer from "./Feature/reviewSlice";
import checkoutReducer from "./Feature/checkoutSlice";

import wishlistReducer from "./wishlistSlice";
import renterRequestsReducer from "./Feature/renterRequestSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    gadgets: gadgetReducer,
    reviews: reviewReducer,
    checkout: checkoutReducer,
    wishlist: wishlistReducer,
    renterRequests: renterRequestsReducer,
    failedAttempts: failedAttemptsReducer,
  },
});

export default store;
