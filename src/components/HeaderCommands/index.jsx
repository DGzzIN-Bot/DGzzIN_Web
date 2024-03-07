import React from "react";
import { Header } from "./style";
import icons from "data/icons";

const HeaderCommands = () => {
  return (
    <>
      <Header>
        <header>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <a href="/">
            <img src={icons.DGzzIN.link} className="logo" />
          </a>
          <div className="toggleMenu" onclick="menuToggle();">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="navigation">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://discord.gg/fTWzcm75VD">Suporte</a>
            </li>
            <li>
              <a href="https://discord.com/api/oauth2/authorize?client_id=844065812355612702&permissions=8&scope=bot">
                Convite
              </a>
            </li>
          </ul>
        </header>
      </Header>
    </>
  );
};

export default HeaderCommands;
