import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default function Linkicons(){
   
    return(

        <nav>
            <Link to= "/camisetas" className = {'/camisetas'}>Camisetas</Link>
            <Link to= "/calças" className = {'/calças'}>Calças</Link>
            <Link to= "/Bonés" className = {'/Bonés'}>Bonés</Link>
            <Link to= "/Headphones" className = {'/Headphones'}>Headphones</Link>
            <Link to= "/Ténis" className = {'/Ténis'}>Ténis</Link>
        </nav>
    )
}