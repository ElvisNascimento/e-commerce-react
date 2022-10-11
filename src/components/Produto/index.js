import Comprar from "./Comprar"

export default function Produto(props) {
    return (
        <div>
            <span>
                {props.titulo}
            </span>
            <Comprar titulo={props.titulo} />
        </div>
    )
}