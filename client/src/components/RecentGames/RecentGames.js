import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { RecentGamesWrap } from "./RecentGamesStyle";

const BestGames = () => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/games")
      .then((res) => setGamesData(res.data));
  }, []);

  return (
    <RecentGamesWrap>
      <h2>Jeux récent</h2>
      <div className="recentGame">
        {gamesData.slice(0, 12).map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </RecentGamesWrap>
  );
};

export default BestGames;
