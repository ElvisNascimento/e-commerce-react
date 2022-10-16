import { Link } from "react-router-dom";

export default function MeusPedidos(){
    return(
        <div>
            <h1>
               MEUS PEDIDOS
            </h1>
            <Link className="btn" to={'/home'}>Voltar</Link>
        </div>
    )
}