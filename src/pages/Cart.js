import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { showCart } from "../app/ShowItemInCartSlice";
import { remove } from "../app/ShowItemInCartSlice";
import { RemoveOneCake } from "../app/ReduceCakeQuanSlice";

import { useEffect } from "react";
import Swal from "sweetalert2";
import { STATUSES } from "../app/ShowItemInCartSlice";
import { useNavigate } from "react-router-dom";
import { CakeRemove } from "../app/CakeRemoveCartSlice";
import { useCallback } from "react";
const Cart = () => {
  const token = localStorage.getItem("akshaytoken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data1: items, status } = useSelector((state) => state.showItemInCart);
  // let  = itemsOrignal;
  // console.log(items, "itemmmm");

  useEffect(() => {
    dispatch(showCart());
    if (!token) {
      navigate("/");
    }
  }, []);

  var totalItem = parseInt(0);
  var totolPrice = parseInt(0);
  let quant = parseInt(0);
  // let len = items.length;
  // console.log(len, "444444444444444");
  // for (let i = 0; i < items.length; i++) {
  //   var a = parseInt(items[i].quantity);
  //   quant = a + quant;
  //   let b = parseInt(items[i].price);
  //   let c = parseInt(items[i].quantity);
  //   totolPrice += parseInt(items[i].price) * parseInt(items[i].quantity);
  //   totalItem = i;
  // }

  // const headers = {
  //   authtoken: token,
  //   "Content-Type": "text/json",
  // };
  // const getItem = () => {
  //   axios
  //     .post("https://apifromashu.herokuapp.com/api/cakeorders", BigData1, {
  //       headers: headers,
  //     })
  //     .then((res) => {
  //       console.log("RESPONSE RECEIVED: ", res.data.cakeorders);
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log("AXIOS ERROR: ", err);
  //       return err;
  //     });
  // }
  // const getItem = () => {
  // axios
  //   .get("https://apifromashu.herokuapp.com/api/cakecart", {
  //     headers: headers,
  //   })
  //   .then((res) => {
  //     console.log("RESPONSE RECEIVED: ", res.data);
  //     return res;
  //   })
  //   .catch((err) => {
  //     console.log("AXIOS ERROR: ", err);
  //     return err;
  //   });
  // }

  // const getItem = async () => {
  //   const res = await fetch(
  //     "https://apifromashu.herokuapp.com/api/cakecart",

  //     {
  //       method: "get",
  //       headers: {
  //         authtoken: token,
  //         "Content-Type": "text/json",
  //       },
  //     }
  //   );
  //   const response = await res.json();
  //   console.log(response, "dfdsdfa");
  //   // return response;
  // };

  const DecreamentOneCake = (items1) => {
    dispatch(RemoveOneCake(items1));
    // dispatch(showCart());
    if (!token) {
      navigate("/");
    }
    // setfirst(first + 1);
  };
  const RemoveItemCart = (id) => {
    dispatch(remove(id)); // it will lacally remove Cake from cart
    dispatch(CakeRemove(id)); // it will  remove Cake from from sever
  };

  // const filt = useCallback((id) => {
  //   items = items.filter((item) => item.cakeid !== id);
  //   console.log(items, "filt fuctnion");
  // }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Show Details Loading.....</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>something went wrong..!</h2>;
  }

  return (
    <>
      {/* <Navbar className="sticky" />; */}
      <div className="container px-3 my-5 clearfix">
        <div className="card">
          <div className="card-header">
            <h2>Shopping Cart</h2>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered m-0">
                <thead>
                  <tr>
                    {/* <!-- Set columns width --> */}
                    <th
                      className="text-center py-3 px-4"
                      // style={{min-width: "400px"}}
                    >
                      Product Name &amp; Details
                    </th>
                    <th
                      className="text-right py-3 px-4"
                      style={{ width: "100px" }}
                    >
                      Price
                    </th>
                    <th
                      className="text-center py-3 px-4"
                      style={{ width: "120px" }}
                    >
                      Quantity
                    </th>
                    <th
                      className="text-right py-3 px-4"
                      style={{ width: "100px" }}
                    >
                      Total
                    </th>
                    <th
                      className="text-center align-middle py-3 px-0"
                      style={{ width: "40px" }}
                    >
                      <a
                        href="#"
                        className="shop-tooltip float-none text-light"
                        title=""
                        data-original-title="Clear cart"
                      >
                        <i className="ino ion-md-trash"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                {items &&
                  items.map((item, ind) => (
                    <tbody key={ind}>
                      <tr>
                        <td className="p-4">
                          <div className="media align-items-center flex">
                            <img
                              className="d-block  ui-bordered mr-4 w-32"
                              alt=""
                              src={item.image}
                            />
                            <div className="media-body">
                              <p href="#" className="d-block text-dark">
                                {item.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4">
                          {item.price}
                        </td>

                        <td className="quant flex gap-x-3 justify-center items-center">
                          <button
                            onClick={() => DecreamentOneCake(item.cakeid)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                          >
                            ➖
                          </button>
                          <h2 className="">{item.quantity}</h2>
                          <button
                            // (click)="incrementCakes(cart, cart.quantity)"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                          >
                            ➕
                          </button>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4">
                          {item.price * item.quantity}
                        </td>
                        <td className="text-center align-middle px-0">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                            // (click)="reomvecakeformcart(cart.cakeid)"
                            onClick={() => RemoveItemCart(item.cakeid)}
                            // onClick={() => filt(item.cakeid)}
                          >
                            ✖
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
              {/* </div> */}

              <div className="float-right">
                <button
                  type="button"
                  className="btn btn-lg btn-default md-btn-flat mt-2 mr-3 btn-primary"
                  // routerLink="/getapi"
                >
                  Back to shopping
                </button>

                <button
                  type="button"
                  className="btn btn-lg btn-primary mt-2"
                  // routerLink="/checkout/summary"
                >
                  Checkout
                </button>
                <button
                  type="button"
                  // routerLink="/address"
                  className="btn btn-lg btn-primary mt-2"
                >
                  Address
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Quantity
                  <span>{quant}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Total Item
                  <span>{totalItem}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      {" "}
                      <p className="mb-0">(including VAT)</p>{" "}
                    </strong>
                  </div>
                  <span>
                    <strong>{totolPrice}</strong>
                  </span>
                </li>
              </ul>

              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
