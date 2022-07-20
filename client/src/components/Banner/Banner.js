import React from "react";
import { Link } from "react-router-dom";
import { BannerWrap } from "./BannerStyle";

const Banner = () => {
  return (
    <BannerWrap>
      <h2>Game Name</h2>
      <button>
        <Link to="/Cart/panier">Acheter</Link>
      </button>
      <p>60 €</p>
    </BannerWrap>
  );
};

export default Banner;
