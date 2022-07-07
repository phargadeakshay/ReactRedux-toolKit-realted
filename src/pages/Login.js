import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [submitData, setsubmitData] = useState({});

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setdata({ ...data, [name]: value });
    console.log("data ", data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ye sall cup nam be top ", submitData);
    console.log("ye sall cup nam be data ", data);
    setsubmitData(data);
    handleLogin(submitData);
    console.log("ye sall cup nam be bottom", submitData);
  };

  // useEffect(() => {
  //   handleLogin();
  // }, []);

  const handleLogin = async (info) => {
    const { email, password } = info;
    const res = await fetch("https://apifromashu.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const response = await res.json();
    localStorage.setItem("akshaytoken", response.token);
    console.log("response", response);
    console.log("response token", response.token);
    if (response.token) {
      Swal.fire("Logged", "Succefully Login");
      navigate("/");
      // window.location.reload();
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex w-8/12 bg-white mt-14 mb-5 justify-end shadow-2xl">
        <div className="grid grid-cols-6">
          <div className="col-start-1 col-span-3 p-5">
            <form>
              <div className="flex flex-col">
                <div className="flex flex-col mb-2 gap-y-1">
                  <label>email</label>
                  <input
                    className="border border-blue-400 p-2"
                    type="text"
                    placeholder="email"
                    id="email"
                    onChange={handleInput}
                    value={data.email}
                    required
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
                  {/* <span
                className="text-red-500"
                *ngIf="loginForm.submitted && email.errors && email.touched"
              > */}
                  {/* <span *ngIf="email.errors['pattern']"> email is Invalid</span>
              </span> */}
                </div>
                <div className="flex flex-col mb-2 gap-y-1">
                  <label>password</label>
                  <input
                    className="border border-blue-400 p-2"
                    type="text"
                    placeholder="password"
                    id="password"
                    onChange={handleInput}
                    value={data.password}
                    required
                    name="password"
                    minLength="3"
                  />
                  {/* <span
                className="text-red-500"
                *ngIf="
                  loginForm.submitted && password.errors && password.touched
                "
              >
                <span *ngIf="password.errors['minlength']"
                  >password should be 4 digit</span
                >
              </span> */}
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="py-2 px-4 rounded-md mb-3 mt-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 ..."
              >
                Login
              </button>
            </form>
            <span className="flex gap-x-2 items-center">
              <p>Don't have an account?</p>
              <Link
                className="py-2 px-4 border-2 border-pink-500 text-pink-400 rounded-lg"
                to=""
              >
                Create New
              </Link>
            </span>
          </div>
          <div className="col-start-4 col-span-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-5 text-white">
            <h1 className="mb-5">We are more than just a company</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
