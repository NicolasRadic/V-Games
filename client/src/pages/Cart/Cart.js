import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { CartWrap } from "./CartStyle";

const Cart = () => {
  return (
    <CartWrap>
      <Header />
      <div className="content">
        <h1>Your cart</h1>
      </div>

      <Footer />
    </CartWrap>
  );
};

export default Cart;
