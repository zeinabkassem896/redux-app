import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CarImg from '../assets/images/car_crop.jpg';
import CarImg2 from '../assets/images/car.jpg';
import Icon1 from '../assets/images/Dolls_with_background300x.png';
import Icon2 from '../assets/images/icons_with_background_1.png';
import Icon3 from '../assets/images/icons_with_background_5.png';
import Icon4 from '../assets/images/icons_with_background_6.png';
import Icon5 from '../assets/images/icons_with_backgroundss_2.png';
import Icon6 from '../assets/images/icons_with_background_2.png';

import Toy1 from '../assets/images/toy1.jpg';
import Toy2 from '../assets/images/toy2.jpg';
import Toy3 from '../assets/images/toy3.jpg';
import Toy4 from '../assets/images/toy4.jpg';
import Toy5 from '../assets/images/toy5.jpg';
import Toy6 from '../assets/images/toy6.jpg';
import Toy7 from '../assets/images/toy7.jpg';
import Toy8 from '../assets/images/toy8.jpg';

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
                <p className="red_text"><span>Our Product</span></p>
              </Col>
            </Row>


          <br/><br/><br/><br/><br/>
          
          <Row className="text-center">
            <Col sm={3} className='product_image'> <img src={Toy1}/> </Col>
            <Col sm={3} className='product_image'> <img src={Toy2} className='product_image' loading="lazy"/> </Col>
            <Col sm={3} className='product_image'> <img src={Toy3} className='product_image' loading="lazy"/> </Col>
            <Col sm={3} className='product_image'> <img src={Toy4} className='product_image' loading="lazy"/> </Col>
          </Row>
            
          <br/><br/>


          <Row className="text-center">
            <Col sm={3} className='product_image'> <img src={Toy5}/> </Col>
            <Col sm={3} className='product_image'> <img src={Toy6} className='product_image' loading="lazy"/> </Col>
            <Col sm={3} className='product_image'> <img src={Toy7} className='product_image' loading="lazy"/> </Col>
            <Col sm={3} className='product_image'> <img src={Toy8} className='product_image' loading="lazy"/> </Col>
          </Row>
            
            
          <br/><br/><br/><br/><br/>
            <Row className="text-center">
              <Col sm={2}></Col>
              <Col sm={8}>
                <p className="red_text"><span>OUR STORY</span></p>
              </Col>


          <br/><br/><br/><br/><br/>
          
          <Row className="text-center">
          <Col sm={2}></Col>
            <Col sm={8}>
              <span className='our_story'>
                              
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).



              </span>
              
            </Col>
          </Row>
            
          </Row>
          <br/><br/><br/><br/>

            <Row className="text-center">
              <Col sm={2}></Col>
              <Col sm={8}>
                <p className="red_text"><span>TOYS</span></p>
              </Col>
              
            </Row>

          </Container>
            <Container>
      
              <br/><br/><br/><br/>
              <Row className="text-center">
                <Col sm={4}> <img src={Icon1} className='home_subimage' loading="lazy"/> </Col>
                <Col sm={4}> <img src={Icon2} className='home_subimage' loading="lazy"/> </Col>
                <Col sm={4}> <img src={Icon6} className='home_subimage' loading="lazy"/> </Col>
              </Row>
              <br/><br/><br/><br/>
              <Row className="text-center">
                <Col sm={4}> <img src={Icon4} className='home_subimage' loading="lazy"/> </Col>
                <Col sm={4}> <img src={Icon5} className='home_subimage' loading="lazy"/> </Col>
                <Col sm={4}> <img src={Icon3} className='home_subimage' loading="lazy"/> </Col>
              </Row>

          <br/><br/><br/><br/>
        </Container>

      </>
 
        

  )
}