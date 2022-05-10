import React from "react";
import {
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Badge,
  Navbar,
  NavbarBrand,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import vid from "../assets/nav.mov";
import "./navbar.css";
import "./Shop";

function Navs({ totalItems }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const Showcheckout = () => {
    if (totalItems >= 1) {
      return (
        <NavItem onClick={toggle} className="sm m-5">
          <NavLink className="nav-link" to="/Checkout">
            Checkout
          </NavLink>
        </NavItem>
      );
    } else {
      return <div />;
    }
  };

  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="gradient__text ms-4" style={{ marginTop: "2rem" }}>
                {" "}
                Fired by Ferrari
              </h1>
              <h2 className="gradient__text ms-4">
                Distinctive Ceramics For Fascinating People
              </h2>
            </div>
          </div>
        </div>
      </Jumbotron>

      <Navbar sticky="top" dark expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/Shop">
            <video
              className="ms-4"
              autoPlay
              playsInline
              loop
              preload="auto"
              src={vid}
              height="70"
              width="70"
              alt="CRF-Logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem onClick={toggle} className="sm m-5">
                <NavLink className="nav-link" to="./Landing">
                  Welcome
                </NavLink>
              </NavItem>
              <NavItem onClick={toggle} className="sm m-5">
                <NavLink className="nav-link" to="./Shop">
                  Shop
                </NavLink>
              </NavItem>
              <NavItem onClick={toggle} className="text-nowrap sm m-5">
                <NavLink className="nav-link" to="./Cart">
                  <CgShoppingCart className="m-1" />
                  Cart
                  <Badge color="dark" pill>
                    {totalItems}
                  </Badge>
                </NavLink>
              </NavItem>
              <Showcheckout />
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default Navs;
