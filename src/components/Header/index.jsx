import React, { useState } from "react";
import { Container } from "./style";

const Header = () => {
  const [classOn, setClassOn] = useState(false);

  return (
    <>
      <Container>
        <header>
          <a href="/" className="brand">
            DGzzIN ツ
          </a>
          <div
            className={classOn ? "toggleMenu active" : "toggleMenu"}
            onClick={() => setClassOn(!classOn)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className={classOn ? "navigation active" : "navigation"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://discord.gg/fTWzcm75VD" target="--blank">
                Suporte
              </a>
            </li>
            <li>
              <a href="/commands">Comandos</a>
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
        </header>
      </Container>
    </>
  );
};

export default Header;
