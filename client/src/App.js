import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import GamePage from "./pages/GamePage/GamePage";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/panier" element={<Cart />} />
        <Route path="/page-du-jeux" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
