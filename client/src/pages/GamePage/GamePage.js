import React from "react";
import Header from "../../components/Header/Header";
import { GamePageWrap } from "./GamePageStyle";

const GamePage = ({ game }) => {
  return (
    <GamePageWrap>
      <Header />
      <h1>{game}</h1>
    </GamePageWrap>
  );
};

export default GamePage;
