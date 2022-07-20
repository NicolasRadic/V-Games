import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { GamePageWrap } from "./GamePageStyle";
import PicturesSlider from "../../components/PicturesSlider/PicturesSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Footer from "../../components/Footer/Footer";

const GamePage = () => {
  const location = useLocation();
  const { game } = location.state;
  const ApiKey = process.env.REACT_APP_RAWG_API_KEY;
  const [gameDetails, setGameDetails] = useState();
  const [synopsisToggle, setSynopsisToggle] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${game.id}?key=${ApiKey}`)
      .then((res) => {
        setGameDetails(res.data);
        console.log(res.data);
      });
  }, [game.id, ApiKey]);

  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("-");
  };

  const addStorage = () => {
    let storedData = window.localStorage.games
      ? window.localStorage.games.split(",")
      : [];
    if (!storedData.includes(game.id.toString())) {
      storedData.push(game.id);
      window.localStorage.games = storedData;
    }
  };

  return (
    <GamePageWrap>
      <Header />
      <div className="content">
        <h2>{game.name}</h2>
        <p className="content__rating">{game.metacritic} / 100</p>
        <img src={game.background_image} alt="Game Banner" />
        <Link
          className="content__acheter"
          to="../../Cart/panier"
          state={{ game: game }}
        >
          <button className="content__butAcheter">Acheter</button>
        </Link>
        <button className="content__butWish" onClick={() => addStorage()}>
          Ajouter à la liste de souhaits
        </button>
        <div className="content__details">
          <p className="content__devTitle">Développeur</p>

          {gameDetails && (
            <p className="content__pubName">{gameDetails.developers[0].name}</p>
          )}
        </div>
        <div className="content__details">
          <p className="content__pubTitle">Éditeur</p>

          {gameDetails && (
            <p className="content__pubName">{gameDetails.publishers[0].name}</p>
          )}
        </div>
        <div className="content__details">
          <p className="content__pubTitle">Date de sortie</p>
          <p className="content__pubName">{dateFormater(game.released)}</p>
        </div>
        <div className="content__slidercontainer">
          <div className="content__slider">
            <PicturesSlider images={game.short_screenshots} />
          </div>
        </div>

        {gameDetails && (
          <p
            className={
              "content__synopsis" + (synopsisToggle ? "--toggled" : "")
            }
            onClick={(e) => setSynopsisToggle(!synopsisToggle)}
          >
            {gameDetails.description_raw}
          </p>
        )}
        <div className="content__type">
          <div className="content__gendertag">
            <p className="content__typetitle">Genres</p>
            <p className="content__allgenders">
              {gameDetails &&
                gameDetails.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div className="content__gendertag">
            <p className="content__typetitle">Tags</p>
            <p className="content__alltags">
              {gameDetails &&
                gameDetails.tags.map((tag) => tag.name).join(", ")}
            </p>
          </div>
        </div>
        <div>{gameDetails && gameDetails.tags.map((tag) => tag.name)}</div>
      </div>
      <Footer />
    </GamePageWrap>
  );
};

export default GamePage;
