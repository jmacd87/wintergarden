import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";


export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <div className="logo">
            <h1>Company Name</h1>
          </div>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <p>SERVICES</p>
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <p> ABOUT</p>
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <p> CONTACT</p>
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: #210002 !important;
  max-height: 100px;
  font-family:'Alegreya Sans SC'; 
  font-color: var(--mainYellow)!important;
  .nav-link {
    color: var(--mainGreen) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
