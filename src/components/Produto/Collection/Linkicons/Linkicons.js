import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button } from '@mui/material';
//import imagem from "./produto/Collection/img/imgframes/frame10.png"

import './index.css'




export default function Linkicons(){
    return(
        <section>
            <div className='card-deck d-flex justify-content-center' >
                <p className="titulo">Coleções em destaque</p>
            </div>
            <div className='d-flex d-flex-row-row justify-content-center'>
                <nav>
                    <Link to="/"></Link>
                    <Button className="botao"><Link to="/Camisetas">Camisetas</Link></Button>
                    <Button className="botao"><Link to="/Calcas" > Calças</Link></Button>
                    <Button className="botao"><Link to="/Bones"> Bonés</Link></Button>
                    <Button className="botao"><Link to="/Headphones">Headphones</Link></Button>
                    <Button className="botao"><Link to="/Tenis">Tênis</Link></Button>
                </nav>
            </div>
        </section>
    );
}