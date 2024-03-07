import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;

  .command {
    background-color: #23272a;
    border-radius: 0;
    padding: 10px 0 10px 0;
    width: 85%;
    cursor: pointer;
  }

  .command summary {
    font-size: 22px;
    color: #fff;
    padding: 1rem;
  }

  .command span {
    font-size: 14px;
    color: #72767d;
  }

  .command h4 {
    font-size: 15px;
    color: #cccccc;
    margin: 0 20px 0 10px;
    padding: 1rem;
  }

  .command p {
    color: #72767d;
    font-size: 14px;
    margin: 15px 0 0 10px;
    padding: 0 2rem;
  }
`;
