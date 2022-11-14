import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const CakeDetailsSlide = createSlice({
  name: "details",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    // id: 0,
  },

  reducers: {
    // GetCakeId(state, action) {
    //   state.id = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsDetails.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProductsDetails.fulfilled, (state, action) => {
        state.data = action.payload;
        // console.log("showCake details  error ", state.data);
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProductsDetails.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus, GetCakeId } = CakeDetailsSlide.actions;
export default CakeDetailsSlide.reducer;

export const fetchProductsDetails = createAsyncThunk(
  "products/detail",
  async (idd) => {
    const res = await fetch(
      `https://apifromashu.herokuapp.com/api/cake/${idd}`
    );
    const sata = await res.json();
    // console.log("showCake details thanuk  ", sata);
    return sata;
  }
);
