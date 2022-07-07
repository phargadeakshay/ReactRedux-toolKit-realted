import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/ProductSlice";
import { fetchProductsDetails } from "../app/CakeDetailsSlice";
import { GetCakeId } from "../app/CakeDetailsSlice";
import { STATUSES } from "../app/ProductSlice";
import { add } from "../app/CartSlice";
import { useNavigate, useParams } from "react-router-dom";
const Product = () => {
  const idd = useParams;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: products, status } = useSelector((state) => state.product);
  console.log("hee", products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (cakeid) => {
    dispatch(GetCakeId(cakeid));
    navigate(`/showcakedetails/${cakeid}`);
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading.....</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>something went wrong..!</h2>;
  }
  return (
    <div className="flex gap-x-8 mx-5 flex-wrap justify-between">
      {products.data &&
        products.data.map((product) => (
          <div
            className=" my-5 relative shadow-xl hover:translate-y-4 transition duration-500 ease-in-out w-60 h-72"
            key={product.cakeid}
          >
            <img src={product.image} className=" w-full h-40" alt="..." />
            <span className="bg-green-500 py-1 px-2 absolute top-0 right-0 rounded-sm">
              eggless
            </span>
            {/*  <span className="bg-yellow-400 py-1 px-2 absolute top-0 right-0 rounded-md font-medium">
              withEggs
            </span> */}
            <div className="flex flex-col gap-y-3">
              <h5 className="">{product.name}</h5>
              <p className="">{product.price}</p>

              <a
                className="py-2 px-4 rounded-md  mb-3  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-center"
                onClick={() => handleAdd(product.cakeid)}
              >
                showDetails
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
