import React from "react";
import { Content, History } from "./style";
import Footer from "components/Footer";
import Header from "components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Content>
        <div className="content">
          <div className="textBox">
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
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=844065812355612702&permissions=8&scope=bot"
              target="--blank"
            >
              Me Adicione +
            </a>
          </div>
        </div>
      </Content>

      <History>
        <section className="make_history">
          <div className="media-body">
            <div>
              <div className="title">
                <h1>Vamos construir nossa história juntos?</h1>
              </div>
              <p>
                "Um dos meus maiores objetivos é conseguir os moderadores e os
                membros do seu servidor satisfeitos, mesmo que seja apenas uma
                pequena emoção de alegria no seu rosto."
              </p>
              <p className="text">
                Por isto eu possuo vários comandos diferentes e engraçados para
                você se divertir e interagir com eles! É também para que eles
                possam ajudar no desenvolvimento da sua comunidade, e fazer que
                ela se torne um lugar legal, aonde as pessoas podem se reunir
                sem medo é ser felizes e se divertir lá, tudo isso, com comandos
                que eu posso fazer como os de moderação, para ajudar os
                moderadores do seu servidor a cuidar da sua comunidade; os de
                diversão, que ajudam a sua comunidade a se torna-la um lugar
                muito mais divertido; os de informações, que fornecem algumas
                informações importantes na palma da sua mão com um simples
                comando, sem que você precise sair do Discord para ir pesquisar;
                os de imagens no qual você pode brincar com seus amigos, é os
                utilitários, no qual ele pode te ajudar a resolver alguma coisa
                que você precise ao longo do seu dia. Me adicione em seu
                servidor e vamos construir a nossa história juntos!
              </p>
            </div>
          </div>
        </section>
      </History>
      <Footer />
    </>
  );
};

export default Home;
