import styled from "styled-components";

export const Container = styled.div`
  .title .list {
    margin-top: 1rem;
  }

  .title .list a {
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
    color: #fff;
    font-size: 3rem;
  }

  .title {
    color: #111;
    margin-top: 10rem;
    text-align: center;
  }

  @media (min-width: 760px) and (max-width: 991px) {
    .title {
      margin-top: 5rem;
    }

    .title h1 {
      color: #fff;
      font-size: 2rem;
    }
  }

  @media (max-width: 760px) {
    .title {
      margin-top: 5rem;
    }

    .title h1 {
      color: #fff;
      font-size: 1.5rem;
    }

    .title .list a {
      background-color: #000000;
      border: 1px 1px 1px 1px;
      padding: 10px 15px 10px 15px;
      text-decoration: none;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    .title .list {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: 50px;
      margin-top: 1rem;
    }
  }
`;
