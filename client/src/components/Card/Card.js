import React from "react";
import { Link } from "react-router-dom";
import { CardWrap } from "./CardStyle";

const Card = ({ game }) => {
  console.log(game.image);
  return (
    <CardWrap>
      <Link to="/panier">
        <img className="gameImg" src={game.image} alt="Game Banner" />
        <h3>{game.name}</h3>
        <p>{game.rating}</p>
      </Link>
    </CardWrap>
  );
};

export default Card;
