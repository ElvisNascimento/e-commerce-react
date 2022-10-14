import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import './index.css'



export default function Linkicons(){
    return(
        <div className="texto">
            <p>Coleções em destaque</p>
            <div>
                <nav>
                    <Link to="/"></Link>
                    <Link to="/Camisetas">Camisetas</Link>
                    <Link to="/Calcas" > Calças</Link>
                    <Link to="/Bones"> Bonés</Link>
                    <Link to="/Headphones">Headphones</Link>
                    <Link to="/Tenis">Tênis</Link>
                </nav>
            </div>
        </div>
    );
}