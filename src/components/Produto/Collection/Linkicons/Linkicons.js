import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";


export default function Linkicons(){
    return(
        <div>
            <p>Coleções em destaque</p>
            <nav>
                <Link to= "/Camisetas" className = {ativar('/Camisetas')}>Camisetas</Link>
                <Link to= "/Calças" className = {ativar('/Calças')}>Calças</Link>
                <Link to= "/Bonés" className = {ativar('/Bonés')}>Bonés</Link>
                <Link to= "/Headphones" className = {ativar('/Headphones')}>Headphones</Link>
                <Link to= "/Tênis" className = {ativar('/Tênis')}>Tênis</Link>
            </nav>
        </div>
    );
}