import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../app/CartSlice";
import axios from "axios";
import { useState } from "react";

const token = JSON.parse(localStorage.getItem("akshaytoken"));
// const token = localStorage.getItem("akshaytoken");
const Cart = () => {
  const [BigData, setBigData] = useState({
    name: "akshay",
  });
  const getItem = () => {
    const Obj = {};
    console.log("token ", token);
    axios
      .post("https://apifromashu.herokuapp.com/api/cakecart", Obj, {
        headers: {
          Authorization: ` qBearer ${token}`,
        },
      })
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        return res;
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        return err;
      });

    // const response = await res.json();
    // console.log("hello1", res);
    // console.log("hello2", response);
    // return response;
  };

  const dispatch = useDispatch();
  const { data: items } = useSelector((state) => state.cart);
  console.log("hello", items);
  const handleRemove = (productId) => {
    // dispatch(remove(productId));
  };

  return (
    <div className="container px-3 my-5 clearfix">
      <button onClick={getItem}>Rockstart</button>
      {/* <!-- Shopping cart table --> */}
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
              <tbody>
                <tr>
                  <td className="p-4">
                    <div className="media align-items-center">
                      <img
                        className="d-block ui-w-40 ui-bordered mr-4"
                        alt=""
                      />
                      <div className="media-body">
                        <a href="#" className="d-block text-dark">
                          lll
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-right font-weight-semibold align-middle p-4">
                    price
                  </td>
                  {/* <!-- <td className="quant">
                  <button
                    (click)="decrementCakes(cart.cakeid)"
                    className="btn btn-secondary"
                  >
                    -
                  </button>
                  {{ cart.quantity }}
                  <button
                    (click)="incrementCakes(cart, cart.quantity)"
                    className="btn btn-secondary"
                  >
                    +
                  </button>
                </td> --> */}
                  <td className="quant flex gap-x-3 justify-center items-center">
                    <button
                      // (click)="decrementCakes(cart.cakeid)"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                    >
                      ➖
                    </button>
                    {/* <h2 className="">
                    {{ cart.quantity }}
                  </h2> */}
                    {/* <button
                    (click)="incrementCakes(cart, cart.quantity)"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                  >
                    ➕
                  </button> */}
                  </td>
                  <td className="text-right font-weight-semibold align-middle p-4">
                    price *quantity
                  </td>
                  <td className="text-center align-middle px-0">
                    <button
                    // (click)="reomvecakeformcart(cart.cakeid)"
                    >
                      ✖
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
            {/* </div> */}

            <div className="float-right">
              <button
                type="button"
                className="btn btn-lg btn-default md-btn-flat mt-2 mr-3"
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
    </div>
  );
};

export default Cart;
