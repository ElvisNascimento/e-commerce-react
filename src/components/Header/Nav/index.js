import { Link } from "react-router-dom";
import './index.css'

export default function Nav() {
    return (
        <div>
            <Link className="mx-2">Home</Link>
            <Link className="mx-2">Produtos</Link>
            <Link className="mx-2">Categorias</Link>
            <Link className="mx-2">Meus Produtos</Link>
        </div>
    )
}