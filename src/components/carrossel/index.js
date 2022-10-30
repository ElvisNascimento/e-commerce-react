import React from 'react';
import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import tenis from "./img/tenis.png"
import bola from "./img/bola.png"
import "./style.css"

export default function Carrossel() {
  return (
    <Carousel className="container carousel-principal bg-white">
      <Carousel.Item className="divisao">
        <div className="linha">
          <img className="circle" src={bola} alt="circle" />
          <img className="nike" src={tenis} alt="nike" />
        </div>
        <div>
        <Carousel.Caption className="esquerda">
          <div className="textos">
            <div>
              <p className="texto1"> Melhores ofertas personalizadas</p>
            </div>
            <div>
              <h2 className='texto2'> Queima de estoque Nike 🔥</h2>
            </div>
            <div>
              <p className="texto3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
            </div>
            <div className="wrapper-button1">
              <Link to="/produtos">
                <button className="buttonofertas">Ver Ofertas</button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div  className="linha">

          <img className="circle" src={bola} alt="circle" />
          <img className="nike" src={tenis} alt="nike" />
        </div>

        <Carousel.Caption className="esquerda">
          <div className="textos">
            <div>
              <p className="texto1"> Melhores ofertas personalizadas</p>
            </div>

            <div>
              <h2 className='texto2'>Queima de estoque Nike 🔥</h2>
            </div>
            <div>
              <p className="texto3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
            </div>
            <div className="wrapper-button1">
              <a href="">
                <button className="buttonofertas">Ver Ofertas</button>
              </a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="linha">

          <img className="circle" src={bola} alt="circle" />
          <img className="nike" src={tenis} alt="nike" />
        </div>

        <Carousel.Caption className="esquerda">
          <div className="textos">
            <div className="wrapper-texto1">
              <p className="texto1"> Melhores ofertas personalizadas</p>
            </div>

            <div>
              <h2 className='texto2'>Queima de estoque Nike 🔥</h2>
            </div>
            <div>
              <p className="texto3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
            </div>
            <div className="wrapper-button1">
              <a href="">
                <button className="buttonofertas">Ver Ofertas</button>
              </a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="linha">

          <img className="circle" src={bola} alt="circle" />
          <img className="nike" src={tenis} alt="nike" />
        </div>

        <Carousel.Caption className="esquerda">
          <div className="textos">
            <div>
              <p className="texto1"> Melhores ofertas personalizadas</p>
            </div>

            <div>
              <h2 className='texto2'>
                Queima de estoque Nike 🔥
              </h2>
            </div>
            <div>
              <p className="texto3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
            </div>
            <div className="wrapper-button1">
              <a href="">
                <button className="buttonofertas">Ver Ofertas</button>
              </a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}