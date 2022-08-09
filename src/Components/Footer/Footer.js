import React from "react";

import Vtex from "../../assets/Icons/Vtex.svg";
import LogoWhite from "../../assets/Icons/LogoWhite.svg";
import IconMessage from "../../assets/Icons/IconMessage.svg";
import IconSupport from "../../assets/Icons/IconSupport.svg";

import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_ubication_container">
        <h2>Localização</h2>
        <p></p>
        <div>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p> Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p> +55 11 3090 1039</p>
        </div>
      </div>
      <div className="footer_button_container">
        <button className="footer_button_secondary">
          <img src={IconMessage} alt="IconMessage" />
          <p>ENTRE EM CONTATO</p>
        </button>
        <button className="footer_button_secondary">
          <img src={IconSupport} alt="IconSupport" />
          <p>FALE COM O NOSSO CONSULTOR ONLINE</p>
        </button>
      </div>
      <div className="footer_logo_container">
        <div className="footer_corebiz">
          <p>Created by</p>
          <a
            href="https://www.corebiz.ag/es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoWhite} alt="Logo" />
          </a>
        </div>
        <div className="footer_vtex">
          <p>Powered by</p>
          <a
            href="https://vtex.com/ar-es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Vtex} alt="Vtex" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
