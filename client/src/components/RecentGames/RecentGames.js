import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

import { RecentGamesWrap } from "./RecentGamesStyle";

const BestGames = () => {
  const [gamesData, setGamesData] = useState([]);
  const ApiKey = process.env.REACT_APP_RAWG_API_KEY;
  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games?key=${ApiKey}&page_size=12`)
      .then((res) => {
        setGamesData(res.data.results);
        console.log(res.data.results);
      });
  }, [ApiKey]);

  return (
    <RecentGamesWrap>
      <h2>Jeux récent</h2>
      <div className="recentGame">
        {gamesData.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </RecentGamesWrap>
  );
};

export default BestGames;
