import React from "react";
import styled from "styled-components";
import Transactions from "./Transactions";

const Market = () => {
  return (
    <Wrapper id="market">
      <Content>
        <div className="text">Current Price</div>
        <div
          class="cryptohopper-web-widget"
          data-id="2"
          data-chart_color="#ffffff"
          data-text_color="#000000"
          data-background_color="#7b78d3"
          data-coins="bitcoin,ethereum,bnb,solana,polkadot,dogecoin,shiba-inu,dai,tron,litecoin,flow,dao-maker"
          data-numcoins="5"
          data-theme="midnight"
          data-realtime="on"
          data-ticker_position="header"
        ></div>
<div className="chart_market"><div bw-cash="true" class="btcwdgt-chart"></div></div>
        

        <Transactions />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 2rem;
  color: #fff;
  position: relative;
  display: flex;
  margin-top: 5rem;

  // .spline {
  //   position: absolute;
  //   margin: 250px 0 0 300px;
  //   top: 0;
  //   right: 0;

    // @media (max-width: 1024px) {
    //   transform: scale(0.8) transform(200px);
    // }
    // @media (max-width: 800px) {
    //   transform: scale(0.7) transform(600px);
    // }
    // @media (max-width: 600px) {
    //   transform: scale(0.5) transform(-100px);
    //   right: auto;
    //   left: 50%;
    //   margin-left: -600px;
    // }
    // @media (max-width: 375px) {
    //   transform: scale(0.45) transform(-50px);
    // }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: Sans-serif;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;

    @media (max-width: 1024px) {
      font-size: 60px;
      font-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      font-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }
  p {
    font-weight: normal;
    line-height: 1.5;
    font-size: 1rem;
    max-width: 380px;
  }
  button {
    background: rgba(0, 0, 0, 0.2);
    border: none;
    padding: 12px 30px;
    border-radius: 14px;
    background-color: hsla(248, 47%, 63%, 1);
    background-image: radial-gradient(
        at 89% 94%,
        hsla(242, 51%, 65%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 100% 92%, hsla(287, 40%, 72%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 0%, hsla(241, 18%, 49%, 1) 0px, transparent 50%);
    color: #fff;
    max-width: 200px;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    transition: 1s;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
    }
  }
`;

export default Market;
