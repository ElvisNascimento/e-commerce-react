import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button } from '@mui/material';
import FrameC from '../img/FrameC.png'
import FrameCa from '../img/FrameCa.png'
import FrameH from '../img/FrameH.png'
import FrameS from '../img/FrameS.png'

import './index.css'




export default function Linkicons(){
    return(
        <section>
            <div className='card-deck d-flex justify-content-center' >
                <p className="titulo">Coleções em destaque</p>
            </div>
            <div className='d-flex d-flex-row justify-content-center'>
                <nav>
                    <Link to="/"></Link>
                        <Button className="botao"><Link to="/Camisetas"><p className="texto"><img src={FrameC}/>Camisetas</p></Link></Button>
                        <Button className="botao"><Link to="/Calcas" ><p className="texto"><img src={FrameCa}/>Calças</p></Link></Button>
                        <Button className="botao"><Link to="/Bones"><p className="texto"><img src={FrameCa}/>Bonés</p></Link></Button>
                        <Button className="botao"><Link to="/Headphones"><p className="texto"><img src={FrameH}/>Headphones</p></Link></Button>                  
                        <Button className="botao"><Link to="/Tenis"><p className="texto"><img src={FrameS}/>Tênis</p></Link></Button>
                </nav>
            </div>
        </section>
    );
}