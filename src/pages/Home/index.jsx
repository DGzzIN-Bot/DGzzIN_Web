import React from "react";
import { Content } from "./style";

const Home = () => {
  return (
    <>
      <Content>
        <div class="content">
          <div class="textBox">
            <h1>
              O Seu BOT.
              <br />
              <span>Para o Discord</span>
            </h1>
            <p>
              Olá me chamo DGzzIN, sou um BOT para o Discord, um dos meus
              objetivos e deixa os moderadores e os membros do seu servidor
              felizes, trago comandos de Diversão, Moderação, Informações,
              Utilidades entre muitas outras coisas, me adicione no seu servidor
              e divirte-se!
            </p>
            <a href="https://discord.com/api/oauth2/authorize?client_id=844065812355612702&permissions=8&scope=bot">
              Me Adicione +
            </a>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Home;
