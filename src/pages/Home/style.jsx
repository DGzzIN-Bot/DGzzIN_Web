import styled from "styled-components";

export const Content = styled.div`
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
`;
