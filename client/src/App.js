import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import ForgotPassword from "./components/user/ForgotPassword";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import Shipping from "./components/cart/Shipping";
import Checkout from "./components/cart/Checkout";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
