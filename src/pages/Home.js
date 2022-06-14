import React from 'react';
import { Navbar, Col, Container, Row } from 'react-bootstrap';
import CarImg from '../assets/images/car_crop.jpg';
import CarImg2 from '../assets/images/car.jpg';
import Icon1 from '../assets/images/Dolls_with_background300x.png';
import Icon2 from '../assets/images/icons_with_background_1.png';
import Icon3 from '../assets/images/icons_with_background_5.png';
import Icon4 from '../assets/images/icons_with_background_6.png';
import Icon5 from '../assets/images/icons_with_backgroundss_2.png';
import Icon6 from '../assets/images/icons_with_background_2.png';


import '../css/Home.css'



export default function Home() {
  return (
      <>
        <img src={CarImg2} alt="car image" className='home_image'/>
          <Container>
            <br/><br/><br/><br/><br/>
            <Row className="text-center">
              <Col sm={2}></Col>
              <Col sm={8}>
                <p className="red_text"><span>TOYS</span></p>
              </Col>
              
            </Row>

          </Container>
          <div className="background_color">
            <Container>
      
              <br/><br/><br/><br/>
              <Row className="text-center">
                <Col sm={4}> <img src={Icon1} className='home_subimage'/> </Col>
                <Col sm={4}> <img src={Icon2} className='home_subimage'/> </Col>
                <Col sm={4}> <img src={Icon6} className='home_subimage'/> </Col>
              </Row>
              <br/><br/><br/><br/>
              <Row className="text-center">
                <Col sm={4}> <img src={Icon4} className='home_subimage'/> </Col>
                <Col sm={4}> <img src={Icon5} className='home_subimage'/> </Col>
                <Col sm={4}> <img src={Icon3} className='home_subimage'/> </Col>
              </Row>
            </Container>
          </div>

          <br/><br/><br/><br/><br/>
          <Container>
          <Row className="text-center">
            <Col sm={2}></Col>
            <Col sm={8}>
            <p className="red_text"><span>OUR STORY</span></p>
            </Col>
            
          </Row>
        </Container>
      </>
 
        

  )
}
