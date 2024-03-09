import styled from "styled-components";

export const Container = styled.div`
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
  }

  header ul {
    position: relative;
    display: flex;
  }

  header ul li {
    list-style: none;
  }

  .navigation a {
    position: relative;
    color: #fff;
    font-size: 1em;
    font-weight: 500;
    text-decoration: none;
    margin-left: 30px;
    transition: 0.3s ease;
  }

  .navigation a:before {
    content: "";
    position: absolute;
    background: #fff;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    transition: 0.3s ease;
  }

  .navigation a:hover:before {
    width: 100%;
  }

  .brand {
    color: #fff;
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
  }

  @media (max-width: 991px) {
    header {
      padding: 20px 40px;
    }

    header ul {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #111;
      flex-direction: column;
      align-items: center;
      visibility: hidden;
      opacity: 0;
      transition: 0.2s;
      z-index: 1;
    }

    header ul.active {
      visibility: visible;
      opacity: 1;
    }

    .navigation {
      margin-top: 20%;
    }

    .navigation a {
      margin-left: 0;
    }

    header ul li {
      margin: 5%;
    }

    .toggleMenu div {
      height: 5px;
      width: 30px;
      margin: 6px;
      background-color: #fff;
      transition-duration: 0.3s;
    }

    .toggleMenu.active .line1 {
      transform: rotate(45deg) translate(7px, 7px);
      background-color: #fff;
    }

    .toggleMenu.active .line2 {
      opacity: 0;
    }

    .toggleMenu.active .line3 {
      transform: rotate(-45deg) translate(8px, -9px);
      background-color: #fff;
    }

    .toggleMenu.active {
      z-index: 2;
    }
  }
`;
