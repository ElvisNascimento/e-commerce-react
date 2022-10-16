import { Link } from "react-router-dom";

export default function SobreDripStore(){
    return(
        <div>
            <h1>
                SOBRE DRIP STORE
            </h1>
            <Link className="btn" to={'/home'}>Voltar</Link>
        </div>
    )
}