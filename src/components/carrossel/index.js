import React from "react";
import tenis from "./img/tenis.png"


export default function Carrossel() {
    return (
        <React.Fragment>
        <div id="carouselExampleIndicators" className="carousel slide" dataRide="carousel">
        <ol className="carousel-indicators">
          <li dataTarget="#carouselExampleIndicators" dataSlideTo="0" className="active"></li>
          <li dataTarget="#carouselExampleIndicators" dataSlideTo="1"></li>
          <li dataTarget="#carouselExampleIndicators" dataSlideTo="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-50 col md-20" src={tenis} alt="First slide"/>
          </div>
          <div className="carousel-item">
            {/* {<img className="d-block w-100" src={tenis} alt="Second slide"/> } */}
          </div>
          <div className="carousel-item">
            {/* <img className="d-block w-100" src="./../components/carrossel/tenis.png" alt="Third slide"/> */}
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
      </React.Fragment>
    );
  }