import React, { useState } from "react";
import HeaderCommands from "components/HeaderCommands";
import Footer from "components/Footer";
import { Container } from "./style";
import data from "data/commands";
import CommandList from "components/CommandList";

const Commands = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const categoryTitles = {
    all: "Todos os Comandos - DGzzIN ツ",
    fun: "Comandos de Diversão - DGzzIN ツ",
    images: "Comandos de Imagens - DGzzIN ツ",
    information: "Comandos de Informações - DGzzIN ツ",
    moderation: "Comandos de Moderação - DGzzIN ツ",
    utils: "Comandos de Utilidades - DGzzIN ツ",
  };

  const commands = data[selectedCategory] || [];
  const title = categoryTitles[selectedCategory] || "Comandos Desconhecidos.";

  return (
    <>
      <HeaderCommands />
      <Container>
        <section className="title">
          <h1>{title}</h1>
          <br />

          <div className="list">
            <a
              className={selectedCategory === "all" ? "active" : ""}
              onClick={() => handleCategoryChange("all")}
            >
              Todos
            </a>
            <a
              className={selectedCategory === "fun" ? "active" : ""}
              onClick={() => handleCategoryChange("fun")}
            >
              Diversão
            </a>
            <a
              className={selectedCategory === "images" ? "active" : ""}
              onClick={() => handleCategoryChange("images")}
            >
              Imagens
            </a>
            <a
              className={selectedCategory === "information" ? "active" : ""}
              onClick={() => handleCategoryChange("information")}
            >
              Informações
            </a>
            <a
              className={selectedCategory === "moderation" ? "active" : ""}
              onClick={() => handleCategoryChange("moderation")}
            >
              Moderação
            </a>
            <a
              className={selectedCategory === "utils" ? "active" : ""}
              onClick={() => handleCategoryChange("utils")}
            >
              Utilitários
            </a>
          </div>
        </section>
        <CommandList commands={commands} />
      </Container>
      <Footer />
    </>
  );
};

export default Commands;
