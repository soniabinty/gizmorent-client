import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchProductByCode = createAsyncThunk(
  "checkout/fetchProductByCode",
  async (productCode) => {
    try {
      const response = await axios.get(`${API_URL}/gadget/${productCode}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message);
    }
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    bookingDetails: null,
    checkoutProduct: [],
    paymentDetails: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCheckoutProduct: (state, action) => {
      state.checkoutProduct = action.payload;
    },
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
    setPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
  
    clearCheckout: (state) => {
      state.bookingDetails = null;
      state.productDetails = null;
      state.paymentDetails = null;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.checkoutProduct = [action.payload];
      })
      .addCase(fetchProductByCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const {
  setCheckoutProduct,
  setPaymentDetails,
  setBookingDetails,
  clearCheckout,
  paymentDetails
} = checkoutSlice.actions;


export default checkoutSlice.reducer;
