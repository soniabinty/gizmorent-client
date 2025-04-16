import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all renter orders
export const fetchorders = createAsyncThunk(
  'order/fetchAll',
  async () => {
    const res = await axios.get('http://localhost:5000/orders');
    console.log("Fetched orders:", res.data); 
    return res.data.requests; 
  }
);

// Update order status
export const updateOrderStatus = createAsyncThunk(
  'order/updateStatus',
  async ({ orderId, newStatus }) => {
    const res = await axios.patch(`http://localhost:5000/orders/${orderId}`, {
      status: newStatus,
    });
    return res.data;
  }
);

export const fetchOrdersByEmail = createAsyncThunk("order/fetchOrdersByEmail", async (email) => {
  const response = await axios.get(`http://localhost:5000/orders/api?email=${email}`);
  console.log("Fetched Orders:", response.data); 
  return response.data || []; 
});



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
      })

      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const updatedOrder = action.payload;
        const index = state.orders.findIndex(order => order._id === updatedOrder._id);
        if (index !== -1) {
          state.orders[index] = updatedOrder;
        }
      })

      .addCase(fetchOrdersByEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrdersByEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrdersByEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error occurred";
      });
      
  }
});

export default orderSlice.reducer;
