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
          to="/panier"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Panier</li>
        </NavLink>
      </ul>
    </HeaderWrap>
  );
};

export default Header;
