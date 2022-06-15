import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { GamePageWrap } from "./GamePageStyle";

const GamePage = () => {
  const location = useLocation();
  const { game } = location.state;
  return (
    <GamePageWrap>
      <Header />
      <h2>{game.name}</h2>
    </GamePageWrap>
  );
};

export default GamePage;
