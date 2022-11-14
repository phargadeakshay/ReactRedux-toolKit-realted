import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],

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
    RemovFromCart(state, action) {
      // console.log(state.data2, "77777777/////////");
      // const token = localStorage.getItem("akshaytoken");
      // state.data = state.data.filter((item) => item.id !== action.payload);
      // state.RemovFromCartt(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
        console.log(state.data, " Add to Cart");
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(RemoveOneCake.pending, (state, action) => {
  //       state.status = STATUSES.LOADING;
  //     })
  //     .addCase(RemoveOneCake.fulfilled, (state, action) => {
  //       // state.data2 = action.payload;
  //       state.status = STATUSES.IDLE;

  //       console.log(action.payload, "builder");
  //     })
  //     .addCase(RemoveOneCake.rejected, (state, action) => {
  //       state.status = STATUSES.ERROR;
  //     });
  // },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(showCart.pending, (state, action) => {
  //       state.status = STATUSES.LOADING;
  //     })
  //     .addCase(showCart.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //       state.status = STATUSES.IDLE;
  //       // console.log(state.data2, "77777777/////////");
  //       console.log(action.payload, "7777777777777777vvvv7777777777777");
  //     })
  //     .addCase(showCart.rejected, (state, action) => {
  //       state.status = STATUSES.ERROR;
  //     });
  // },
});

export const addToCart = createAsyncThunk("cart/details", async (obj) => {
  const token1 = localStorage.getItem("akshaytoken");

  var url1 = "https://apifromashu.herokuapp.com/api/addcaketocart";

  const { name, price, weight, image, cakeid } = obj;
  const res = await fetch(url1, {
    method: "POST",
    headers: {
      authtoken: token1,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      weight,
      image,
      cakeid,
    }),
  });
  const response = await res.json();
  // console.log(response, "addto cart");
  // if (res) {
  //   Swal.fire("Cart", "Succefully Into the Cart");
  // }
  return response.data;
});

export const { setProducts, setStatus, RemovFromCart } = CartSlice.actions;
export default CartSlice.reducer;
// const CartSlice = createSlice({
//   name: "cart",
//   initialState: [],

//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//     },
//     remove(state, action) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { add, remove } = CartSlice.actions;
// export default CartSlice.reducer;

// axios
//     .post(
//       "https://apifromashu.herokuapp.com/api/cakecart",
//       postData,
//       axiosConfig
//     )
//     .then((res) => {
//       console.log("RESPONSE RECEIVED: ", res);
//       return res;
//     })
//     .catch((err) => {
//       console.log("AXIOS ERROR: ", err);
//       return err;
//     });
