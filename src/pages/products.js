import React from 'react';
import { InputGroup, Form, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import CardImage from '../components/CardImage';
import Toy1 from '../assets/images/toy1.jpg';

import '../css/Product.css';


function products(props) {
    return (
        <Container>

            <Row className="text-center">
                <Col md={3}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                        <Form.Control className='search_input'
                        placeholder="Product Name"
                        />
                    </InputGroup>
                </Col>
                <Col md={6}></Col>
                <Col lg={3} className="align-self-start">
                    <InputGroup className="mb-2">
                    <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-1"
                        >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                        <InputGroup.Text id="basic-addon1">Filer By</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <div className='m-1 ml-2'>Filter By</div>
                    <div className='fiter_items'>
                        <Form.Check
                        inline
                        label="zeinab"
                        name="group1"
                        type='checkbox'
                        id='inline'
                        />
                    <Form.Check
                        inline
                        label="1"
                        name="group1"
                        type='checkbox'
                        id='inline2'
                        />
                    <Form.Check
                        inline
                        label="1"
                        name="group1"
                        type='checkbox'
                        id='inline3'
                        />
                    </div>
                    
                </Col>
                <Col md="9">
                <Row className="text-center">
                    <Col sm={4} className='product_image'>
                        <CardImage key={0} image={Toy1} title="title1"/>
                    </Col>
                           
                    <Col sm={4} className='product_image'>
                        <CardImage key={0} image={Toy1} title="title1"/>
                    </Col>
                    <Col sm={4} className='product_image'>
                        <CardImage key={0} image={Toy1} title="title1"/>
                    </Col>
                    <Col sm={4} className='product_image'>
                        <CardImage key={0} image={Toy1} title="title1"/>
                    </Col>
                    <Col sm={4} className='product_image'>
                        <CardImage key={0} image={Toy1} title="title1"/>
                    </Col>
                    <Col sm={4} className='product_image'>
                        <CardImage key={0} image={Toy1} title="title1"/>
                    </Col>
                    <Col sm={4} className='product_image'>
                        <CardImage key={0} image={Toy1} title="title1"/>
                    </Col>
                    <Col sm={4} className='product_image'>
                        <CardImage key={0} image={Toy1} title="title1"/>
                    </Col>
                    <Col sm={4} className='product_image'>
                        <CardImage key={0} image={Toy1} title="title1"/>
                    </Col>
                </Row>

                </Col>

       
            
        
            </Row>
        </Container>
    );
}

export default products;