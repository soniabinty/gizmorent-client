import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/gadgets";

export const fetchGadgets = createAsyncThunk(
  "gadgets/fetchGadgets",
  async ({ query = "", category = "", minPrice = 0, maxPrice = 999999, sortOption = "Default" }) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/gadgets/search?query=${query}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sortOption}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch gadgets");
    }
  }
);

const gadgetSlice = createSlice({
  name: "gadgets",
  initialState: {
    gadgets: [],
    loading: false,
    error: null,
    filters: {
      query: "",
      category: "",
      minPrice: 0,
      maxPrice: Infinity,
      sortOption: "Default", 
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGadgets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGadgets.fulfilled, (state, action) => {
        state.loading = false;
        state.gadgets = action.payload;
      })
      .addCase(fetchGadgets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters } = gadgetSlice.actions;
export default gadgetSlice.reducer;
