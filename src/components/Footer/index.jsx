import React from "react";
import { Footers } from "./style";
import icons from "data/icons";

const Footer = () => {
  return (
    <>
      <Footers>
        <footer className="footer" id="footer">
          <div className="container">
            <div className="logo">
              <img src={icons.DeGabrielDEV.link} alt="" />
            </div>
            <div className="row">
              <div className="footer-col">
                <h4>Navegue por aqui</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/fTWzcm75VD">Suporte</a>
                  </li>
                  <li>
                    <a href="./commands.html">Comandos</a>
                  </li>
                  <li>
                    <a href="https://discord.com/api/oauth2/authorize?client_id=844065812355612702&permissions=8&scope=bot">
                      Convite
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Obter Ajuda</h4>
                <ul>
                  <li>
                    <a href="https://discord.gg/VzMfCmNJyb">Comunidade</a>
                  </li>
                  <li>
                    <a href="mailto:contatodegabrielofi@gmail.com">Email</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/fTWzcm75VD">Suporte</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Redes Sociais:</h4>
                <div className="social-links">
                  <a href="https://github.com/degabrielofi">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://discord.gg/fTWzcm75VD">
                    <i className="fab fa-discord"></i>
                  </a>
                  <a href="https://www.instagram.com/dgzzinbot/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/DGzzINBOT">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Footers>
    </>
  );
};

export default Footer;
