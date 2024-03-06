import styled from "styled-components";

export const Content = styled.div`
  .content {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4b1616;
    padding: 100px;
  }

  .content .textBox {
    position: relative;
    max-width: 600px;
  }

  .content .textBox h1 {
    font-size: 4em;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 75px;
    margin-bottom: 40px;
    color: #fff;
  }

  .content .textBox h1 span {
    font-size: 1.2em;
    font-weight: 600;
  }

  .content .textBox p {
    color: #fff;
  }

  .content .textBox a {
    display: inline-block;
    margin-top: 40px;
    padding: 15px 35px;
    background: #fff;
    color: #2696e9;
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
  }

  .content:before {
    z-index: 888;
    content: "";
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    left: 0;
    background: linear-gradient(transparent, #202834);
  }
`;

export const History = styled.div`
  .make_history {
    height: 100vh;
    background-color: #202834;
  }

  .make_history h1 {
    margin-top: 0;
    color: #4b1616;
    font-size: 1.5rem;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    text-transform: uppercase;
  }

  .make_history p {
    margin-top: 1rem;
    color: #fff;
    font-size: 1rem;
  }

  .make_history .title {
    text-align: center;
  }
`;
