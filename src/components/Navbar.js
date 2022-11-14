import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const Navbar = () => {
  let token = localStorage.getItem("akshaytoken");
  const [Condition, setCondition] = useState(true);
  const [buttonn, setbuttonn] = useState("Login");
  const items = useSelector((state) => state.showItemInCart);
  // console.log("tokennn ", token);
  // useEffect(() => {
  //   const token = localStorage.getItem("akshaytoken");
  //   OnLogin();
  //   OnloggedOut();
  // }, []);

  const OnloggedOut = () => {
    localStorage.removeItem("akshaytoken");

    console.log("OnloggedOut ", token);
    window.location.reload();
    Swal.fire("Logout", "You Have Been logged Out Successfull", "success");
    buttonn === "Login" ? setbuttonn("Logout") : setbuttonn("Login");
  };

  const OnLogin = () => {
    buttonn === "Logout" ? setbuttonn("Logout") : setbuttonn("Login");
  };

  return (
    <div className="bg-blue-400 text-white flex items-center justify-between">
      <ul className="flex p-3 ">
        <li className="mr-6">
          <Link className=" hover:text-blue-800 " to="/">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link className=" hover:text-blue-800" to="/cart">
            Cart
          </Link>
        </li>
        <li className="mr-6">
          <Link className=" hover:text-blue-800" to="/showcakedetails">
            showcakedetails
          </Link>
        </li>
        <li className="mr-6">
          {token ? (
            <Link onClick={OnloggedOut} className=" hover:text-blue-800" to="">
              logout
            </Link>
          ) : (
            <Link
              onClick={OnLogin}
              className=" hover:text-blue-800"
              to="/login"
            >
              {buttonn}
            </Link>
          )}
        </li>

        <li className="mr-6">
          <a className=" hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li className="mr-6">
          <a className=" cursor-not-allowed" href="#">
            Disabled
          </a>
        </li>
      </ul>
      <ul className="pr-10">
        <li>cartItem:{items.length}</li>
      </ul>
    </div>
  );
};

export default Navbar;
