import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data1: [],

    status: STATUSES.IDLE,
  },

  reducers: {
    // async addToCart(state, action) {
    //   const token = localStorage.getItem("akshaytoken");
    //   var url1 = "https://apifromashu.herokuapp.com/api/addcaketocart";
    //   const { name, price, weight, image, cakeid } = action.payload;
    //   const res = await fetch(url1, {
    //     method: "POST",
    //     headers: {
    //       authtoken: token,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       price,
    //       weight,
    //       image,
    //       cakeid,
    //     }),
    //   });
    //   console.log(res, "22222222222222222222");
    //   if (res) {
    //     Swal.fire("Cart", "Succefully Into the Cart");
    //     // window.location.reload();
    //   }
    // },
    //  var arrayy;,
    // async RemovFromCartt(state, action) {
    //   const token = localStorage.getItem("akshaytoken");
    //   var url1 = "https://apifromashu.herokuapp.com/api/removecakefromcart";
    //   const { cakeid } = action.payload;
    //   const res = await fetch(url1, {
    //     method: "POST",
    //     headers: {
    //       authtoken: token,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       cakeid,
    //     }),
    //   });
    //   state.datarem = await res.json();
    //   // console.log(arrayy, "just for check");
    //   if (res) {
    //     Swal.fire("Remove", "Succefully remove one cake");
    //     // window.location.reload();
    //   }
    // },

    remove(state, action) {
      state.data1 = state.data1.filter(
        (item) => item.cakeid !== action.payload
      );
      console.log(state.data1, "7777777777777777vvvv7777777777777");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(showCart.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(showCart.fulfilled, (state, action) => {
        state.data1 = action.payload;
        state.status = STATUSES.IDLE;
        // console.log(state.data2, "77777777/////////");
        // console.log(action.payload, "7777777777777777vvvv7777777777777");
      })
      .addCase(showCart.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const showCart = createAsyncThunk("cart", async () => {
  const token1 = localStorage.getItem("akshaytoken");

  const res = await fetch(
    "https://apifromashu.herokuapp.com/api/cakecart",

    {
      method: "get",
      headers: {
        authtoken: token1,
        "Content-Type": "text/json",
      },
    }
  );
  const response = await res.json();
  // console.log(response, "dfdsdfa");
  // console.log(response, " show cart cake Cart");
  return response.data;
});

export const { setProducts, setStatus, remove } = CartSlice.actions;
export default CartSlice.reducer;
