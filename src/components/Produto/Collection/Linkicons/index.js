import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import {DirectionsCar, TwoWheeler, DirectionsBike} from "@mui/icons-material"


// function Informacao (props) {
//     return (
//         <Card style={{marginTop: 10}}>
//             <CardContent>
//             <DirectionsCar/>
//             {props.icone}
//             <strong style={{marginRight:'0 10px'}}> 
//             {props.quantidade}</strong>

//                 {props.titulo}
//             </CardContent>
//         </Card>
//     )
// }
export default function Linkicons(){
    return(
        <div>
            <p>Coleções em destaque</p>
            <nav>
                <Link to="/Camisetas">Camisetas</Link>
                <Link to="/Calcas">Calças</Link>
                <Link to="/Bones">Bonés</Link>
                <Link to="/Headphones">Headphones</Link>
                <Link to="/Tenis">Tênis</Link>
            </nav>
        </div>
    );
}