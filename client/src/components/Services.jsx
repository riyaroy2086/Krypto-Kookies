import React, { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import Search from "../assets/search.png";
import Verified from "../assets/verified.png";
import Heart from "../assets/heart.png";
import VanillaTilt from "vanilla-tilt";

function Card(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const options = {
  scale: 1.2,
  speed: 1000,
  max: 30,
};

const Services = () => {
  return (
    <Wrapper id="services">
      
      <div className="text5">Services</div>
      
      <Content>
        {" "}
        <Card options={options}>
          <div className="glass_services">
            <div className="heading">
              {" "}
              <img className="logos_services" src={Verified} />
              Security gurantee
            </div>
            <div className="sub">
              {" "}
              Security is guranteed. We always maintain privacy and maintain the
              quality of our products
            </div>
          </div>
        </Card>
        <Card options={options}>
          <div className="glass_services">
            <div className="heading">
              {" "}
              <img className="logos_services" src={Heart} />
              Best exchange rates
            </div>
            <div className="sub">
              {" "}
              Security is guranteed. We always maintain privacy and maintain the
              quality of our products
            </div>
          </div>
        </Card>
        <Card options={options}>
          <div className="glass_services">
            <div className="heading">
              {" "}
              <img className="logos_services" src={Search} /> Fastest
              transactions
            </div>
            <div className="sub">
              {" "}
              Security is guranteed. We always maintain privacy and maintain the
              quality of our products
            </div>
          </div>
        </Card>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 2rem;
  color: #fff;
  position: relative;

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
  display: flex;
  flex-direction: row;
`;

export default Services;
