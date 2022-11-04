import React from 'react';
import { InputGroup, Form, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CardImage from '../components/CardImage';
import Toy1 from '../assets/images/toy1.jpg';
import Pagination from 'react-bootstrap/Pagination';

import '../css/Product.css';


function oneproduct(props) {
    return (
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

                <Row className='text-center'>
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item active>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Row>

                </Col>

       
            
        
            </Row>
        </Container>
    );
}

export default oneproduct;