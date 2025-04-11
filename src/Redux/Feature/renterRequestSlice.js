import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all pending renter requests
export const fetchRenterRequests = createAsyncThunk(
  'renterRequests/fetchAll',
  async () => {
    const res = await axios.get('http://localhost:5000/renter_request');
   
    return res.data.requests;
  }
);


// Approve renter
export const approveRenter = createAsyncThunk(
  'renterRequests/approve',
  async (email, { dispatch }) => {
    const res = await axios.patch(`http://localhost:5000/approve_renter/${encodeURIComponent(email)}`);
    
    console.log(res.data); // Log response data before returning

    dispatch(fetchRenterRequests()); // Refresh list
    return res.data;
  }
);

// remove renter
export const rejectRenter = createAsyncThunk(
  'renterRequests/reject',
  async (email, { dispatch }) => {
    const res = await axios.delete(`http://localhost:5000/reject_renter/${encodeURIComponent(email)}`);
    
    console.log(res.data); 

    dispatch(fetchRenterRequests()); 
    return res.data;
  }
);

const renterRequestSlice = createSlice({
  name: 'renterRequests',
  initialState: {
    requests: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRenterRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRenterRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.requests = action.payload;
     
      })
      .addCase(fetchRenterRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error occurred";
        console.error("Error fetching renter requests:", action.error);
      })
      .addCase(rejectRenter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(rejectRenter.fulfilled, (state) => {
        state.loading = false;
        // no need to manually update `requests` because we re-fetch it
      })
      .addCase(rejectRenter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to reject renter";
        console.error("Error rejecting renter:", action.error);
      })

      
      
  }
});


export default renterRequestSlice.reducer;
