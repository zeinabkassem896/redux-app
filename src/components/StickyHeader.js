import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/Header.css";
import LogoImage from "../assets/images/bird_small1.png";

export default function Header() {
  let [navbar, setNavbar] = useState("sticky_header hide_sticky_header");
  useEffect(() => {
    window.addEventListener("scroll", () => {
        
      if (window.scrollY > 230){ 
        setNavbar("sticky_header");
      }
      else{
        setNavbar("sticky_header hide_sticky_header");
      }
    });
  });
  return (
    <Navbar
      fixed="top"
      className={navbar}
      expand={"lg"}
    >
      <Container>
        <Navbar.Collapse>
          <Nav className="mx-auto parent align-items-center">
            {/* <Nav.Link href={"/"} className="justify-content-start">
              <img src={LogoImage} alt="logo" />
            </Nav.Link> */}
            <Nav.Link href={"/"} className="headernavbar_link">
              Home
            </Nav.Link>
            <Nav.Link className="headernavbar_link" href="/product">
              Products
            </Nav.Link>
            <Nav.Link className="headernavbar_link"> About Us</Nav.Link>
            <Nav.Link className="headernavbar_link"> Contact Us</Nav.Link>
            <Nav.Link className="headernavbar_link"> Map </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
