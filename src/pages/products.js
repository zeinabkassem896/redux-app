import React from 'react';
import { InputGroup, Form, Container, Row, Col } from 'react-bootstrap';
import '../css/Product.css';


function products(props) {
    return (
        <Container>

            <Row className="text-center">
                <Col sm={3}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                        <Form.Control className='search_input'
                        placeholder="Product Name ..."
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default products;