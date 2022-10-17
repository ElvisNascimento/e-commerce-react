import { Link } from "react-router-dom";
import './index.css'

export default function NavBar() {
    return (
        <div>
            <Link className="mx-2 home" to='/'>Home</Link>
            <Link className="mx-2 produto" to='/produtos'>Produtos</Link>
            <Link className="mx-2 cat" to='/construcao'>Categorias</Link>
            <Link className="mx-2 meus" to='/construcao'>Meus Pedidos</Link>
        </div>
    )
}