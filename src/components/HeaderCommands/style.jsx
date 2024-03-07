import styled from "styled-components";

export const Header = styled.div`
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #202225;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.6);
    z-index: 1000;
  }

  header .logo {
    position: relative;
    max-width: 50px;
    text-align: center;
  }

  header ul {
    position: relative;
    display: flex;
  }

  header ul li {
    list-style: none;
  }

  header .navigation a {
    position: relative;
    color: #fff;
    font-size: 1em;
    font-weight: 500;
    text-decoration: none;
    margin-left: 30px;
    transition: 0.3s ease;
  }

  header .navigation a:before {
    content: "";
    position: absolute;
    background: #fff;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    transition: 0.3s ease;
  }

  header .navigation a:before {
    content: "";
    position: absolute;
    background: #fff;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    transition: 0.3s ease;
  }

  header .navigation a:hover:before {
    width: 100%;
  }
`;
