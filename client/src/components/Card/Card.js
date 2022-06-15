import React from "react";
import { Link } from "react-router-dom";
import { CardWrap } from "./CardStyle";

const Card = ({ game }) => {
  return (
    <CardWrap>
      <Link to="/page-du-jeux" state={{ game: game }}>
        <img
          className="gameImg"
          src={game.background_image}
          alt="Game Banner"
        />
        <h3>{game.name}</h3>
        <p>{game.rating}</p>
      </Link>
    </CardWrap>
  );
};

export default Card;
