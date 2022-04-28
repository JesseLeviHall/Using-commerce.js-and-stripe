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

  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="gradient__text ms-4" style={{ marginTop: "2rem" }}>
                {" "}
                CRF-Art
              </h1>
              <h2 className="gradient__text ms-4">
                Awesome Ceramics For Unique Life-Styles
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
              <NavItem className="sm m-5">
                <NavLink className="nav-link" to="./Landing">
                  Welcome
                </NavLink>
              </NavItem>
              <NavItem className="sm m-5">
                <NavLink className="nav-link" to="./Shop">
                  Shop
                </NavLink>
              </NavItem>
              <NavItem className="text-nowrap sm m-5">
                <NavLink className="nav-link" to="./Cart">
                  Cart
                  <CgShoppingCart />
                  <Badge color="dark" pill>
                    {totalItems}
                  </Badge>
                </NavLink>
              </NavItem>
              <NavItem className="sm m-5">
                <NavLink className="nav-link" to="/Checkout">
                  Checkout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default Navs;
