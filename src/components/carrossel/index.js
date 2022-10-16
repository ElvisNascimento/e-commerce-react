
 
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tenis from "./img/tenis.png"
import "./style.css"

export default function Carrossel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <React.Fragment>
          <Carousel style={{backgroundColor: "rgba(0,0,0,.3)"}} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="d-block w-100" src={tenis} alt="First slide" />
              <Carousel.Caption>
                <h3 style={{color: "red"}}>First slide label</h3>
                <p style={{color: "red"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={tenis} alt="Second slide" />
              <Carousel.Caption>
                <h3 style={{color: "red"}}>Second slide label</h3>
                <p style={{color: "red"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={tenis} alt="Third slide" />
              <Carousel.Caption>
                <h3 style={{color: "red"}}>Third slide label</h3>
                <p style={{color: "red"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </React.Fragment>
    );
  }
          
          
       
          
         