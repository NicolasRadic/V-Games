import React from "react";
import { NavLink } from "react-router-dom";

import { HeaderWrap } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderWrap>
      <h1>V-Games</h1>

      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="../../Cart/panier"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Panier</li>
        </NavLink>
        <NavLink
          to="/liste-de-souhaits"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Souhaits</li>
        </NavLink>
      </ul>
    </HeaderWrap>
  );
};

export default Header;
