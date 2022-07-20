import React from "react";
import { Link } from "react-router-dom";
import { FooterWrap } from "./footerStyle";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="links">
        <Link className="links__link" to="/">
          Conditions d'utilisation
        </Link>
        <Link className="links__link " to="/">
          Politique de confidentialité
        </Link>
        <Link className="links__link" to="/">
          Politique de remboursement de la boutique
        </Link>
        <Link className="links__link " to="/">
          Paramètres des cookies
        </Link>
      </div>
      <div className="contact">
        <p className="contact__title">Support : </p>
        <Link className="contact__support " to="/">
          Contactez nous ici.
        </Link>
      </div>
    </FooterWrap>
  );
};

export default Footer;
