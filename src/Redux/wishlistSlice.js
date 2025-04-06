//for wishlist management
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWishlist = createAsyncThunk("wishlist/fetchWishlist", async () => {
  const response = await fetch("http://localhost:3000/wishlisted");
  return response.json();
});

export const addToWishlist = createAsyncThunk("wishlist/addToWishlist", async (gadget) => {
  const response = await fetch("http://localhost:3000/wishlisted", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gadget),
  });
  return response.json();
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: [], status: "idle", error: null },
  reducers: {
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
      
  },
});

export const { removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
