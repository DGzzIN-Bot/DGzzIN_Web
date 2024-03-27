import styled from "styled-components";

export const Content = styled.div`
  background-color: #4b1616;

  .content {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px;
  }

  .content .textBox {
    position: relative;
    max-width: 600px;
  }

  .content .textBox h1 {
    font-size: 400%;
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
    font-family: "Madimi One", sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 120%;
  }

  .content .textBox a {
    font-family: "Madimi One", sans-serif;
    display: inline-block;
    margin-top: 40px;
    padding: 15px 35px;
    background: #fff;
    color: #2696e9;
    border-radius: 40px;
    font-weight: 700;
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

  .image_dg {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-top: -5%;
  }

  .image_dg img {
    width: 60%;
  }

  @media screen and (max-width: 992px) {
    .content {
      padding: 20px 40px;
      flex-direction: column;
    }

    .content .textBox h1 {
      margin-top: 25%;
      font-size: 200%;
      letter-spacing: 5px;
      line-height: 45px;
      margin-bottom: 20px;
    }

    .content .textBox h1 span {
      font-size: 1.2em;
    }

    .content .textBox p {
      font-size: 100%;
    }

    .content .textBox a {
      margin-top: 20px;
      margin-bottom: 20%;
    }

    .content .image_dg {
      display: flex;
      justify-content: center;
      margin-bottom: 5%;
    }
  }
`;

export const History = styled.div`
  .make_history {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .make_history .media-body h1,
  p {
    font-family: "Madimi One", sans-serif;
    padding: 0 2rem;
  }

  .make_history h1 {
    color: #4b1616;
    font-size: 200%;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    text-transform: uppercase;
    margin-top: 2%;
  }

  .make_history p {
    margin: 2% 0 2% 0;
    color: #fff;
    font-size: 120%;
  }

  .make_history .text {
    margin-bottom: 10%;
  }

  @media screen and (max-width: 992px) {
    .make_history p {
      font-size: 100%;
    }
  }
`;
