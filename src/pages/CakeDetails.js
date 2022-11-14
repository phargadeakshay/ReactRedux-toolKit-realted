import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductsDetails } from "../app/CakeDetailsSlice";
import { STATUSES } from "../app/ProductSlice";

import { addToCart } from "../app/AddToCartSlice";

const CakeDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams();
  // console.log("iddd", idd);

  const { data: products, status } = useSelector((state) => state.details);

  const token = localStorage.getItem("akshaytoken");

  const headers = {
    authtoken: token,
    // "Content-Type": "text/json",
    "Content-Type": "application/json",
  };

  // const rockman = async (datagain) => {
  //   var url1 = "https://apifromashu.herokuapp.com/api/addcaketocart";

  //   const { name, price, weight, image, cakeid } = datagain;
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
  // };

  const addToCartItem = (obj) => {
    // dispatch(showCart());

    // dispatch(addToCart(obj));
    dispatch(addToCart(obj));

    // navigate("/cart");
  };

  useEffect(() => {
    dispatch(fetchProductsDetails(id.id));
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Show Details Loading.....</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>something went wrong..!</h2>;
  }

  return (
    <>
      {/* <Navbar />; */}
      <div className="flex gap-x-8 mx-5 flex-wrap justify-between">
        {/* <button onClick={() => rockman(products.data)}>button</button> */}
        {products.data && (
          <div className="flex bg-indigo-400 w-4/6 m-10">
            <div className="w-3/6">
              <img src={products.data.image} alt="" className="w-full h-4/6" />
              <p>Discriptions:</p>
              <span className="font-bold">{products.data.description}</span>
            </div>
            <div className="p-3 text-lg">
              <h3 className="text-lg font-bold">
                Cake Name: {products.data.name}
              </h3>
              <span>
                ratings:{" "}
                <span className="font-bold">{products.data.ratings}</span>
              </span>
              <h1 className="text-lg font-bold">
                Price: &#x20B9; {products.data.price}
              </h1>

              <p>inclusive of all taxes</p>
              <ul className="list-disc pl-7">
                <li>
                  Cake Flavour:{" "}
                  <span className="font-bold">{products.data.flavour}</span>
                </li>
                <li>
                  Type of Cake:{" "}
                  <span className="font-bold">{products.data.type}</span>
                </li>
                <li>
                  Minimum Weight:{" "}
                  <span className="font-bold"> {products.data.weight}</span>
                </li>
                <li>
                  Type of Bread:{" "}
                  <span className="font-bold"> {products.data.type}</span>
                </li>
                <li>
                  reviews:
                  <span className="font-bold"> {products.data.reviews}</span>
                </li>
                <li>
                  Ingredients:
                  <span className="font-bold">
                    {" "}
                    {products.data.ingredients}
                  </span>
                </li>
                <li>
                  Eggelesss:
                  {products.data.eggless ? (
                    <span className="font-bold">True </span>
                  ) : (
                    <span className="font-bold">Flase </span>
                  )}
                </li>
              </ul>
              <div className="flex gap-x-2 flex-wrap">
                <span>
                  <input type="checkbox" value="500" />
                  <label>500 gm</label>
                </span>
                <span>
                  <input type="checkbox" value="500" />
                  <label>1 kg</label>
                </span>
                <span>
                  <input type="checkbox" value="500" />
                  <label>1.5 kg</label>
                </span>
                <span>
                  <input type="checkbox" value="500" />
                  <label>2 kg</label>
                </span>
                <span>
                  <input type="checkbox" value="500" />
                  <label>2.5 kg</label>
                </span>
                <span>
                  <input type="checkbox" value="500" />
                  <label>3 kg</label>
                </span>
                <span>
                  <input type="checkbox" value="500" />
                  <label>4 kg</label>
                </span>
                <span>
                  <input type="checkbox" value="500" />
                  <label>5 kg</label>
                </span>
              </div>
              {/* <button (click)="addToCartItem()" className="btn btn-primary mr-4">
           Buy Now
         </button> */}
              <button
                onClick={() => addToCartItem(products.data)}
                className="btn btn-primary"
              >
                Add to card
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CakeDetails;
