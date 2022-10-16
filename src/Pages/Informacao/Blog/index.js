import { Link } from "react-router-dom";

export default function Blog(){
    return(
        <div>
            <h1>
                BLOG
            </h1>
            <Link className="btn" to={'/home'}>Voltar</Link>
        </div>
    )
}