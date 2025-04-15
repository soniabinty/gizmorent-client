import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import failedAttemptsReducer from "./failedAttemptsSlice";
import gadgetReducer from "./Feature/gadgetSlice";
import reviewReducer from "./Feature/reviewSlice";
import checkoutReducer from "./Feature/checkoutSlice";
import orderReducer from './Feature/OrderSlice'; 
import wishlistReducer from "./wishlistSlice";
import renterRequestsReducer from "./Feature/renterRequestSlice";

import cartReducer from "./Feature/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    gadgets: gadgetReducer,
    reviews: reviewReducer,
    checkout: checkoutReducer,
    wishlist: wishlistReducer,
    renterRequests: renterRequestsReducer,
    failedAttempts: failedAttemptsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
