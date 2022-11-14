import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const CakeRemoveSlice = createSlice({
  name: "CakeRemoveSlice",
  initialState: {
    data2: [],

    status: STATUSES.IDLE,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(CakeRemove.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(CakeRemove.fulfilled, (state, action) => {
        // state.data2 = action.payload;
        // state.status = STATUSES.IDLE;
        // console.log(state.data2, " remove one cake");
      })
      .addCase(CakeRemove.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const CakeRemove = createAsyncThunk("cart/remove", async (cakeid) => {
  const token1 = localStorage.getItem("akshaytoken");
  var url1 = "https://apifromashu.herokuapp.com/api/removecakefromcart";
  const res = await fetch(url1, {
    method: "POST",
    headers: {
      authtoken: token1,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cakeid,
    }),
  });
  const response = await res.json();
  // console.log(response, "CakeRemove");
  return response;
});
export const { setProducts, setStatus } = CakeRemoveSlice.actions;
export default CakeRemoveSlice.reducer;
