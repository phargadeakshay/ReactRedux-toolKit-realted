import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        // console.log("data in Slice ", state.data);
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});
export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://apifromashu.herokuapp.com/api/allcakes");
  const resData = await res.json();
  // console.log("data in Slice ", data);
  return resData;
});
