import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/Header.css';
import LogoImage from '../assets/images/bird.jpg'



export default function Header() {
  return (
        <>
        <div className='header'>
            <a href="/"><img src={LogoImage} alt="logo" className='logo'/></a>
            <div>
            <Navbar sticky='top' className='header'>
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto parent">
                                <Nav.Link href="/" className='headernavbar_link'> Home </Nav.Link>
                                <Nav.Link className='headernavbar_link' href="/product"> Products </Nav.Link>
                                <Nav.Link className='headernavbar_link'> About Us</Nav.Link>
                                <Nav.Link className='headernavbar_link'> Contact Us</Nav.Link>
                                <Nav.Link className='headernavbar_link'> Map </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </div>
     </>


  )
} 


    // <nav>
    //     <ul>
    //         <li>
    //         <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //         <Link to="/home">Home2</Link>
    //         </li>
    //     </ul>
    // </nav>
