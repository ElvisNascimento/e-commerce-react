import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import TenisBrancoMaior from './TenisBrancoMaior.png'
import './Carroca.css'


function Carroca() {
  return (
    <Carousel className='h-100 '>
      <Carousel.Item className="fundoazul " style={{backgroundColor:'#E2E3FF'}}>
        <img
          className="d-block imagemAzul"
          src={TenisBrancoMaior} 
          alt="First slide"
        />
        <Carousel.Caption >
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='fundopastel' style={{backgroundColor:'#FFE8BC'}}>
        <img
          className="d-block  "
          src={TenisBrancoMaior}
          alt="Second slide"
        />

        <Carousel.Caption >
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item className='fundosalmao' style={{backgroundColor:'#FFC0BC'}}>
        <img
          className="d-block  "
          src={TenisBrancoMaior}
          alt="Third slide"
        />
        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='fundomarrom' style={{backgroundColor:'#DEC699'}}>
        <img
          className="d-block  "
          src={TenisBrancoMaior}
          alt="Third slide"
        />
        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='fundocinza' style={{backgroundColor:'#E8DFCF'}}>
        <img
          className="d-block  "
          src={TenisBrancoMaior}
          alt="Third slide"
        />
        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carroca;