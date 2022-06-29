import React from 'react';
import { InputGroup, Form, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
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
                <Col lg={3} className=".align-self-start">
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
        </Container>
    );
}

export default products;