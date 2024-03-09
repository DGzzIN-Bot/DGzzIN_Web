import styled from "styled-components";

export const Container = styled.div`
  .title .list a {
    font-family: "Madimi One", sans-serif;
    font-weight: 300;
    background-color: #000000;
    border: 1px 1px 1px 1px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    color: #fff;
    transition: all 0.3s;
    cursor: pointer;
  }

  .title .list a.active {
    background-color: #4b1616;
  }

  .title .list a:hover {
    background-color: #4b1616;
  }

  .title h1 {
    font-family: "Madimi One", sans-serif;
    color: #fff;
    font-size: 400%;
  }

  .title {
    color: #111;
    margin-top: 10rem;
    text-align: center;
  }

  @media screen and (max-width: 992px) {
    .title {
      margin-top: 30%;
    }

    .title h1 {
      color: #fff;
      font-size: 150%;
    }

    .title .list a {
      margin-bottom: 0.5rem;
    }

    .title .list {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: 20px;
      margin-top: 1rem;
    }
  }
`;
