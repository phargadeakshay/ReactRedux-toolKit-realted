import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./app/store";
import Cart from "./pages/Cart";
import CakeDetails from "./pages/CakeDetails";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              exact
              path="/showcakedetails/:id"
              element={<CakeDetails />}
            ></Route>
            <Route exact path="/errorpage" element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
