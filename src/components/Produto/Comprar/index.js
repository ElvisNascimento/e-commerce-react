import { width } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../../../App";

export default function Comprar(props) {
    const { carrinho, setCarrinho } = useContext(AppContext);

    function handleComprar() {
        setCarrinho([...carrinho, { nome: props.titulo, quantidade: 1 }])
    }

    return (
        <button onClick={handleComprar}>Comprar</button>
    )
}