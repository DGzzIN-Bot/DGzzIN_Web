import styled from "styled-components";

export const Footers = styled.div`
  .container {
    max-width: 500%;
    margin: auto;
    padding: 1rem 1rem;
  }

  .container .logo {
    width: 100%;
    position: relative;
  }

  .container .logo:after {
    content: "";
    display: block;
    position: absolute;
    right: 0px;
    left: 25%;
    top: 50%;
    height: 1px;
    background: #c5c5c5c5;
  }

  .container .logo img {
    width: 25%;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  ul {
    list-style: none;
  }

  .footer {
    background: rgba(000, 000, 000, 0.5);
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.5);
    padding: 5rem 0;
    margin-top: 0;
  }

  .footer-col {
    width: 25%;
    padding: 0 15px;
  }

  .footer-col h4 {
    font-size: 18px;
    color: #fff;
    text-transform: capitalize;
    margin-bottom: 20px;
    font-weight: 500;
    position: relative;
  }

  .footer-col h4::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #4b1616;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }

  .footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  .footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #fff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
  }

  .footer-col ul li a:hover {
    color: #fff;
    padding-left: 8px;
  }

  .footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #fff;
    transition: all 0.5s ease;
  }

  .footer-col .social-links a:hover {
    color: #24262b;
    background-color: #fff;
  }

  @media (max-width: 767px) {
    .footer-col h4::before {
      margin: 2px 35%;
      width: 30%;
    }

    .footer-col {
      text-align: center;
      width: 50%;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 574px) {
    .footer-col {
      text-align: center;
      width: 100%;
    }
  }
`;
