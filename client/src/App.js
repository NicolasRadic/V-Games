import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";

import GamePage from "./pages/GamePage/GamePage";
import Home from "./pages/Home";
import WhishList from "./pages/WhishList/WhishList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Cart/panier" element={<Cart />} />
        <Route path="/page-du-jeux" element={<GamePage />} />
        <Route path="/liste-de-souhaits" element={<WhishList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
