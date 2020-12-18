import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logoo.png";
import { useLocation } from 'react-router-dom'
const Topnav = () => {
  const location = useLocation();
  const checkActive = (routeName) => {
    //some additional logic to verify you are in the home URI
    
    return location.pathname === routeName ? true : false;
  };  

  
  return (
    <div className="bg-greish">
    
      <Navbar collapseOnSelect expand="lg" className="container">
        <Navbar.Brand href="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavLink
              activeClassName="active-link"
              to="/"
              className="nav-link"
              exact
            >
              Начало
            </NavLink>
            <NavLink
              activeClassName="active-link"
              to="/about"
              className="nav-link"
            >
              За Мен
            </NavLink>
            <NavLink
              activeClassName="active-link"
              to="/blog"
              className="nav-link"
            >
              Блог
            </NavLink>
            <NavLink
              activeClassName="active-link"
              to="/media"
              className="nav-link"
            >
              Медия
            </NavLink>
            <NavLink
              activeClassName="active-link"
              to="/contact"
              className="nav-link"
            >
              Контакти
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topnav;
