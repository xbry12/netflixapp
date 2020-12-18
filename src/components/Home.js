import React, { Component } from "react";
import "../components/css-files/Home.css";
// import Logo from "../images/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png"
// import logo from "../images/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
class Home extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          {/* <Logo src={logo} /> */}
          <NavLink to="/profile" className="signin-btn">
            Sign In
          </NavLink>
        </div>
        <div className="header-content">
          <Title>Unlimited movies, TV shows, and more.</Title>
          <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
          <Link to="/movies" className="main-offer-btn">
            Get Started <i className="arrow"class="far fa-arrow-alt-circle-right"></i>


          </Link>
        </div>
      </HeaderComponent>
    );
  }
}
export default Home;
// Logo
const Logo = styled.img`
    width: 10rem;
    height; 3.5rem;
    position: absolute; 
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
// Header Component
const HeaderComponent = styled.div`
  .signin-btn {
    color: white;
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }
  }

  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-contnet: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;
  }

  .main-offer-btn {
    color: white;
    display: inline-block;
    background: var(--main-red);
    border: none;
    outline: none;
    margin: 0 33%;
    padding: 1.5rem;
    border-radius: 0.1865rem;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: background 0.2s ease-in;
    cursor: pointer;
    &:hover {
      backgronud: var(--main-red-hover);
    }
  }
`;

const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1em;
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
`;
