import React from 'react';
import { Container, Navbar, Row, Col, Nav } from 'react-bootstrap';
import '../css/Footer.css';
import { FiFacebook, FiInstagram } from "react-icons/fi";


export default function Footer() {
  return (
    <>
    <br/>
    <Navbar className='topnavbar footer'>
        <Container>
            <Navbar.Brand href="/" className='topnavbar_container'>
            <Container>
                <Row>
                    <Col><a href="/">Home</a></Col>
                </Row>
                <Row>
                    <Col><a href="/products">Product</a></Col>
                </Row>
                <Row>
                    <Col><a href="/contact-us">Contact us</a></Col>
                </Row>
            </Container>

            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end ">
                <Navbar.Text className='topnavbar_container'>
                <FiFacebook/>
                <FiInstagram/>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    
  )
}
