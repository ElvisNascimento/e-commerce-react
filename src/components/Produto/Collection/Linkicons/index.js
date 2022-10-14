import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";



export default function Linkicons(){
    return(
        <div >
            <p>Coleções em destaque</p>
            <nav>
                <Link to="/Camisetas" >Camisetas</Link>
                <Link to="/Calcas">Calças</Link>
                <Link to="/Bones">Bonés</Link>
                <Link to="/Headphones">Headphones</Link>
                <Link to="/Tenis">Tênis</Link>
            </nav>
        </div>
    );
}