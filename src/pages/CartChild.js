import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const CartChild = (props) => {
  const { data1: itemsOr, status } = useSelector(
    (state) => state.showItemInCart
  );
  let items = itemsOr;
  // const items = props.items;
  // const { name, price, weight, image, cakeid } = items.item;

  // const items = itemss;
  useEffect(() => {}, [props.stateUpdate]);

  console.log("child comp called");

  // const filt = (id) => {
  //   items = items.filter((item) => item.cakeid !== id);
  //   console.log(items, "filt fuctnion");
  // };
  return (
    // <></>
    <>
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
                  onClick={() => props.DecreamentOneCake(item.cakeid)}
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
                  // onClick={() => props.RemoveItemCart(item.cakeid)}
                  onClick={props.stateUpdate}
                >
                  ✖
                </button>
              </td>
            </tr>
          </tbody>
        ))}
    </>
  );
};

export default CartChild;
