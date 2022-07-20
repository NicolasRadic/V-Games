import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { WishListWrap } from "./WhishListStyle";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const WhishList = () => {
  const [listGame, setListGame] = useState([]);

  useEffect(() => {
    const ApiKey = process.env.REACT_APP_RAWG_API_KEY;

    let gamesId = window.localStorage.games
      ? window.localStorage.games.split(",")
      : [];

    for (let i = 0; i < gamesId.length; i++) {
      axios
        .get(`https://api.rawg.io/api/games/${gamesId[i]}?key=${ApiKey}`)
        .then((res) => setListGame((listGame) => [...listGame, res.data]));
      console.log(listGame);
    }
    return;
  }, []);
  return (
    <WishListWrap>
      <Header />
      <div className="content">
        <h2 className="content__title">Liste de souhaits</h2>
        <div className="content__games">
          {listGame.length > 0 ? (
            listGame.map((game) => (
              <div className="content__game">
                <Card game={game} key={game.id} />
              </div>
            ))
          ) : (
            <h2>Aucun coup de coeur pour le moment</h2>
          )}
        </div>
      </div>
      <Footer />
    </WishListWrap>
  );
};

export default WhishList;
