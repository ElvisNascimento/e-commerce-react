import { Link } from "react-router-dom";

export default function TrabalheConosco(){
    return(
        <div>
            <h1>
                TRABALHE CONOSCO
            </h1>
            <Link className="btn" to={'/home'}>Voltar</Link>
        </div>
    )
}