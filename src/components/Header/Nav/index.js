import { Link } from "react-router-dom";
import './index.css'

export default function NavBar() {
    return (
        <div>
            <Link className="mx-2 home" to='/'>Home</Link>
            <Link className="mx-2 produto" to='/Pages/Produtos'>Produtos</Link>
            <Link className="mx-2 cat">Categorias</Link>
            <Link className="mx-2 meus">Meus Pedidos</Link>
        </div>
    )
}