import Produto from "../Produto"

export default function Produtos(props) {
    return (
        <ul>
            <li><Produto titulo="Shampoo" /></li>
            <li><Produto titulo="Sabonete" /></li>
            <li><Produto titulo="Água" /></li>
        </ul>
    );
}