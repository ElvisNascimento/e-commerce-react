import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import tenis from "./img/tenis.png"
import './style.css';


export default function Carrossel() {
    return (
    
        <React.Fragment>
       
       <Carousel className="carousel-principal">
       <div id="carouselExampleIndicators" className="carousel slide" dataRide="carousel">
        <ol className="carousel-indicators">
          <li dataTarget="#carouselExampleIndicators" dataSlideTo="0" className="active slideprimeiro"></li>
          <li dataTarget="#carouselExampleIndicators" dataSlideTo="1" className="active"></li>
          <li dataTarget="#carouselExampleIndicators" dataSlideTo="2" className="active"></li>
        </ol>
        <div className="carousel-inner">
          
          <div className="carousel-item active">
           
          <div>
            <div className="mx-auto text-center d-flex">
             <div><h4>Melhores ofertas personalisadas</h4>
              <h1>Queima de Estoque Nike</h1>
              <p>consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure cosectetur.</p>
              <button className="botaoofertas">Ver ofertas</button>
              </div> 
            <div> <img className=" w-10 col md-10" src={tenis} alt="First slide" /></div>
           
             </div>
            </div>  
          
          </div>
         
          <div className="carousel-item " >
      
          <img className="d-block w-100" src={tenis} alt="Second slide"/> 
          
          </div>
          
          <div className="carousel-item ">
          
           <img className="d-block w-100" src={tenis} alt="Third slide"/>
          
          </div>
        </div>
        
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>  
      </Carousel>
      </React.Fragment>
    );
    }
 