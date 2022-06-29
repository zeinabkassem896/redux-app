import React from 'react';
import { Card } from 'react-bootstrap';
import Toy1 from '../assets/images/toy7.jpg';


import '../css/Card.css'

function CardImage(props) {
    return (
        <Card className="text-white card_all">
            <Card.Img src={props.image} alt="Card image"/>
            <Card.ImgOverlay>
                <Card.Title className='card_title'>{props.title}</Card.Title>
            </Card.ImgOverlay>
      </Card>
    );
}

export default CardImage;