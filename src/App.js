import "./App.css";
import React, { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Car";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services,";
//use font 'lora'
import "typeface-lora";
import Cart from "./components/Cart";
import CartProvider from "./contexts/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Home onShowCart={showCartHandler} />}
          />
          <Route
            path="/about"
            element={<About onShowCart={showCartHandler} />}
          />
          <Route
            path="/services"
            element={<Services onShowCart={showCartHandler} />}
          />
          <Route path="/cars" element={<Cars onShowCart={showCartHandler} />} />
          <Route
            path="/contactUs"
            element={<ContactUs onShowCart={showCartHandler} />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
