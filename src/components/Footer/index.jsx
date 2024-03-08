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
              <a href="https://degabrielofi.vercel.app/" target="--blank">
                <img src={icons.DeGabrielDEV.link} alt="" />
              </a>
            </div>
            <div className="row">
              <div className="footer-col">
                <h4>Navegue por aqui</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/commands">Comandos</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/fTWzcm75VD" target="--blank">
                      Suporte
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/api/oauth2/authorize?client_id=844065812355612702&permissions=8&scope=bot"
                      target="--blank"
                    >
                      Convite
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Obter Ajuda</h4>
                <ul>
                  <li>
                    <a href="https://discord.gg/VzMfCmNJyb" target="--blank">
                      Comunidade
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contatodegabrielofi@gmail.com"
                      target="--blank"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/fTWzcm75VD" target="--blank">
                      Suporte
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Redes Sociais:</h4>
                <div className="social-links">
                  <a href="https://github.com/degabrielofi" target="--blank">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://discord.gg/fTWzcm75VD" target="--blank">
                    <i className="fab fa-discord"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/degabrielofi_/"
                    target="--blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/degabrielofi/"
                    target="--blank"
                  >
                    <i className="fab fa-linkedin"></i>
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
