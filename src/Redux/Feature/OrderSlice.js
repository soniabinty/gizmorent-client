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

// fetchOrdersByEmail action
export const fetchOrdersByEmail = createAsyncThunk("order/fetchOrdersByEmail", async (email) => {
  const response = await axios.get(`http://localhost:5000/orders?email=${email}`);
  console.log("Fetched orders by email:", response.data); 
  return response.data.requests || response.data; 
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
      // fetch all orders
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

      // update order status
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const updatedOrder = action.payload;
        const index = state.orders.findIndex(order => order._id === updatedOrder._id);
        if (index !== -1) {
          state.orders[index] = updatedOrder;
        }
      })

      // fetch orders by email
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
