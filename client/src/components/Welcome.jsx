import React, { useEffect, useRef, useContext } from "react";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "../assets/logo2.jpg";
import Market from "../assets/market.png";
import Exchange from "../assets/exchange.png";

import VanillaTilt from "vanilla-tilt";
import Eth from "../assets/ethereum.png";
import Info from "../assets/info.png";
import Home from "../assets/home.png";

import Connect from "../assets/connect.png";
import Services from "../assets/services.png";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";
import { shortAdd } from "../utils/shortAdd";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Card(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(e) => handleChange(e, name)}
    step="0.0001"
    className="input"
  />
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);
  // console.log(value);

  // const connectWallet =() => {

  // }
  const handleSubmit = (e) => {
    //destructing these propertirs from the state
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) {
      return alert("Please fill all the fields");
    }
    sendTransaction();
  };
  return (
    <BrowserRouter>
      <Wrapper>
        <Spline scene="https://prod.spline.design/o0MCANGGazzC1cml/scene.splinecode" />
        <Cards className="cards" options={options}>
          <div className="container">
            <div className="card" data-tilt>
              <Card>
                <div className="eth-card">
                  <div className="flex">
                    <img className="eth" src={Eth} alt =""/>
                  </div>
                  <div className="add">{shortAdd(currentAccount)}</div>
                  <div className="ethereum">Ethereum</div>
                  <img className="info" src={Info} alt =""/>
                </div>
              </Card>

              <div>
                <div className="glass-inputs">
                  <Input
                    placeholder="Address To"
                    name="addressTo"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
                <div className="glass-inputs">
                  <Input
                    placeholder="Amount (ETH)"
                    name="amount"
                    type="number"
                    handleChange={handleChange}
                  />
                </div>
                {/* <div className="glass-inputs">
                  <Input
                    placeholder="Keyword (Gif)"
                    name="keyword"
                    type="text"
                    handleChange={handleChange}
                  />
                </div> */}

                <div className="glass-inputs">
                  <Input
                    placeholder="Enter Message"
                    name="message"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>

                {isLoading ? (
                  <Loader />
                ) : (
                  <button className="send" type="button" onClick={handleSubmit}>
                    Send
                  </button>
                )}
              </div>
            </div>
          </div>
        </Cards>

        <Content>
          <Menu>
            <img className="logo" src={Logo} alt =""/>
            <div className="glass">
              <li className="ml">
                <img className="logos" src={Home} alt =""/>
                <a href="#top"> Home</a>
              </li>
              <li>
                <img className="logos" src={Services} alt =""/>
                {/* <a href="#"> Services</a> */}
                <Link to="#services">Services</Link>
              </li>
              <li className="ml">
                <img className="logos" src={Market} alt =""/>
                <a href="#market">Market</a>
              </li>
              <li className="ml">
                <img className="logos" src={Exchange} alt =""/>
                <a href="#transactions">Transactions</a>
              </li>

              <li>
                <img className="logos" src={Connect} alt =""/>
                <a href="https://github.com/riyaroy2086"> Connect</a>
              </li>
            </div>
          </Menu>

          <div className="text4">Send Crypto across the world</div>
          <p>
            Explore the crypto world . Buy and sell crypto curencies easily on
            Krypto kookies.
          </p>
          {!currentAccount && (
            <button className="wallet" type="button" onClick={connectWallet}>
              {/* <img src={Wallet} />  */}
              Connect Wallet
            </button>
          )}
        </Content>
      </Wrapper>
    </BrowserRouter>
  );
};

const options = {
  scale: 1.2,
  speed: 1000,
  max: 30,
};

const Wrapper = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 2rem;
  color: #fff;
  position: relative;
  display: flex;

  .spline {
    position: absolute;
    margin: 0 0 0 300px;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
      transform: scale(0.8) transform(200px);
    }
    @media (max-width: 800px) {
      transform: scale(0.7) transform(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) transform(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) transform(-50px);
    }
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
  h1,
  p {
    margin: 0 30px 0 100px;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 100px;
  align-items: center;
  padding: 0;
  margin: 0 30px 0 100px;
  font-size: 1rem;
  flex-direction: row;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-right: 50px;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 8px 20px;
    border-radius: 14px;

    // &:hover {
    //   border: 1px solid rgba(255, 255, 255, 0.5);
    // }
  }
`;

const Cards = styled.div``;

export default Welcome;
