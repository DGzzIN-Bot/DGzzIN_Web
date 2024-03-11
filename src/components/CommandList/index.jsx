import React from "react";
import { Content } from "./style";

const CommandList = ({ commands }) => {
  return (
    <Content>
      {commands.map((command, index) => (
        <div key={index} className="command" style={{ margin: "15px" }}>
          <details>
            <summary>
              {`${command.name}`}
              {<span> - {command.subtitle}</span>}
            </summary>
            <h4>Descrição:</h4>
            <p>{command.usageDescription}</p>
            <br />
            <h4>Como Usar?</h4>
            <div>
              {command.howToUse.map((useCase, i) => (
                <p key={i}>{useCase}</p>
              ))}
            </div>
            <br />
          </details>
        </div>
      ))}
    </Content>
  );
};

export default CommandList;
