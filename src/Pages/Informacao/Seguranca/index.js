import { Link } from "react-router-dom";

export default function Seguranca(){
    return(
        <div>
            <h1>
                SEGURANÇA
            </h1>
            <Link className="btn" to={'/home'}>Voltar</Link>
        </div>
    )
}