import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { GamePageWrap } from "./GamePageStyle";

const GamePage = () => {
  const location = useLocation();
  const { game } = location.state;
  const ApiKey = process.env.REACT_APP_RAWG_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/publishers?key=${ApiKey}`)
      .then((res) => console.log(res.data.results));
  });

  return (
    <GamePageWrap>
      <Header />
      <div className="content">
        <h2>{game.name}</h2>
        <p className="content__rating">{game.metacritic} / 100</p>
        <img src={game.background_image} alt="Game Banner" />
        <Link className="content__acheter" to="/panier">
          <button className="content__butAcheter">Acheter</button>
        </Link>
        <button className="content__butSouhaits">
          Ajouter à la liste de souhaits
        </button>
        <div className="content__details">
          <p className="content__devTitle">Développeur</p>
          <p className="content__devName">someone</p>
        </div>
        <div className="content__details">
          <p className="content__pubTitle">Éditeur</p>
          <p className="content__pubName">someone</p>
        </div>
        <div className="content__details">
          <p className="content__pubTitle">Date de sortie</p>
          <p className="content__pubName">someone</p>
        </div>
        <div className="content__details">
          <p className="content__pubTitle">Plateforme</p>
          <p className="content__pubName">someone</p>
        </div>
      </div>
    </GamePageWrap>
  );
};

export default GamePage;
