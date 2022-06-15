import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrap } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderWrap>
      <h1>V-Games</h1>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/panier"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Panier</li>
          </NavLink>
        </ul>
      </nav>
    </HeaderWrap>
  );
};

export default Header;
