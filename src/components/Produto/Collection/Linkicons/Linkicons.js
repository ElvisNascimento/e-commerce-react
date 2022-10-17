import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button} from '@mui/material';
import FrameC from '../img/FrameC.png'
import FrameCa from '../img/FrameCa.png'
import FrameH from '../img/FrameH.png'
import FrameS from '../img/FrameS.png'
import './index.css'
export default function Linkicons(){
    return(
        <section >
            <div className='card-deck d-flex justify-content-center' >
                <p className="titulo">Coleções em destaque</p>
            </div>
            <div className="cont">
                <nav className='d-flex d-flex-row-row justify-content-center'>
                    <Link to="/"></Link>
                    <div className="botao">
                        <Button className="botao1"><Link to="/Camisetas"><img src={FrameC}/></Link></Button>
                        <p className="texto">Camisetas</p>
                    </div>
                    <div className="botao">   
                        <Button className="botao1"><Link to="/Calcas" ><img src={FrameCa}/></Link></Button>
                        <p className="texto">Calças</p>
                    </div>
                    <div className="botao">
                        <Button className="botao1"><Link to="/Bones"><img src={FrameCa}/></Link></Button>
                        <p className="texto">Bonés</p>
                    </div>
                    <div className="botao">
                        <Button className="botao1"><Link to="/Headphones"><img src={FrameH}/></Link></Button>
                        <p className="texto">Headphones</p>
                    </div>
                    <div className="botao">
                        <Button className="botao1"><Link to="/Tenis"><img src={FrameS}/></Link></Button>
                        <p className="texto">Tênis</p>
                    </div>
                </nav>
            </div>
        </section>
    );
}