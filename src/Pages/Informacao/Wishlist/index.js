import { Link } from "react-router-dom";

export default function Wishlist(){
    return(
        <div>
            <h1>
                WISHLIST
            </h1>
            <Link className="btn" to={'/home'}>Voltar</Link>
        </div>
    )
}