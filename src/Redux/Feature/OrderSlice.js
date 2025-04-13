import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all pending renter orders
export const fetchorders = createAsyncThunk(
  'order/fetchAll',
  async () => {
    const res = await axios.get('http://localhost:5000/orders');
    console.log("Fetched orders:", res.data); 
    return res.data.requests;
  }
);

export const updateOrderStatus = createAsyncThunk(
  'order/updateStatus',
  async ({ orderId, newStatus }) => {
    const res = await axios.patch(`http://localhost:5000/orders/${orderId}`, {
      status: newStatus,
    });
    return res.data;
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
