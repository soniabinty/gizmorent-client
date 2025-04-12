import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all pending renter orders
export const fetchorders = createAsyncThunk(
  'order/fetchAll',
  async () => {
    const res = await axios.get('http://localhost:5000/orders');
    console.log("Fetched orders:", res.data); // 👈 See what's inside
    return res.data.requests;
  }
);


const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchorders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchorders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchorders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error occurred";
        console.error("Error fetching orders:", action.error);
      });
  }
});

export default orderSlice.reducer;
