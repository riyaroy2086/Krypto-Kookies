import React from 'react';
import Insta from '../assets/insta.png';
import FB from '../assets/fab.png';
// import {Mail} from '../assets/mail.png';
import Tweet from '../assets/twitter.png';
import LKN from '../assets/linkedin.png';
import Spline from '@splinetool/react-spline';
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      
   
    <Content>
      <div className="text">Connect With Us  </div>
      
   <div className="glass_connect">
    <div className="text_connect">
    You can connect with us for support and feedback.
    </div>
    <div className="text_connect_sub">  Feel free to drop your query on our twiiter page . Stay tuned for more updates. Till them keep investing . </div>
    <div class="socialsites ">
        {/* <li>
          <a href="mailto:riyaroy2086@gmail.com"><img className="logo" src={Mail} /></a>
        </li> */}
        <div className="icons">
          <a href="mailto:riyaroy2086@gmail.com"><img className="logo_glass" src={FB} /></a>
        </div>
        <div className="icons">
          <a href="mailto:riyaroy2086@gmail.com"><img className="logo_glass" src={Insta} /></a>
        </div>
        <div className="icons">
          <a href="https://twitter.com/riyaroy2086"><img className="logo_glass" src={Tweet} /></a>
        </div>

        <div className="icons">
          <a href="https://www.linkedin.com/in/riyaroy2086/"><img className="logo_glass" src={LKN} /></a>
        </div> 
      </div>
   </div>
   </Content>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 2rem;
  color: #fff;
  position: relative;
  display: flex;
  margin-top: 5rem;

  .spline {
    position: absolute;
    margin: 250px 0 0 300px;
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


export default Footer