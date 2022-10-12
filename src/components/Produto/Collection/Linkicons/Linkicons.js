import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default function Linkicons(){
   
    return(

        <nav>
            <Link to= "/Camisetas" className = {'/Camisetas'}>Camisetas</Link>
            <Link to= "/Calças" className = {'/Calças'}>Calças</Link>
            <Link to= "/Bonés" className = {'/Bonés'}>Bonés</Link>
            <Link to= "/Headphones" className = {'/Headphones'}>Headphones</Link>
            <Link to= "/Tênis" className = {'/Tênis'}>Tênis</Link>
        </nav>
    )
}