
 
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
          <Carousel style={{backgroundColor: "#ffffff"}} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div div class="d-flex">Melhores Ofertas Personalizadas
                <h1><strong>Queima de estoque Nike</strong></h1>
                <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <button style={{backgroundColor:"#f5f5f5"}}>Ver Ofertas</button>
              <img className="d-block w-50" src={tenis} alt="First slide" />
              </div>
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50" src={tenis} alt="Second slide" />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50" src={tenis} alt="Third slide" />
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </React.Fragment>
    );
  }
          
          
       
          
         