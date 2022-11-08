import React from 'react';
import { InputGroup, Form, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CardImage from '../components/CardImage';
import Toy1 from '../assets/images/toy1.jpg';
import Pagination from 'react-bootstrap/Pagination';

import '../css/Oneproduct.css';


function oneproduct(props) {
    return (
        <>
        <Container>
            <Row>
                <Col md="12">
                    <Row className="text-center">
                        <Col sm={6} className='product_image'>
                            <CardImage key={0} image={Toy1} title="title1"/>
                        </Col>
                        <Col sm={4} className='product_image'>
                            <Link to='/'>
                                <CardImage key={0} image={Toy1} title="title123445"/>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row> 
                 
            <Row className="text-center last_section">
              <Col sm={2}></Col>
              <Col sm={8}>
                <p className="red_text">
                <Link to='/product'>
                  <span className='p_span'>Other Products</span>
                </Link>
                </p>
              </Col>
            </Row>
            <Row    >
                <Col sm={3} className='product_image'>
                    <CardImage key={0} image={Toy1} title="title1"/>
                </Col>
                <Col sm={3} className='product_image'>
                    <Link to='/'>
                        <CardImage key={0} image={Toy1} title="title123445"/>
                    </Link>
                </Col>
                <Col sm={3} className='product_image'>
                    <CardImage key={0} image={Toy1} title="title1"/>
                </Col>
                <Col sm={3} className='product_image'>
                    <CardImage key={0} image={Toy1} title="title1"/>
                </Col>

                </Row>  
        </Container>
        </>
    );
}

export default oneproduct;