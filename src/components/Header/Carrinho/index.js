import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function Carrinho() {
    const { carrinho } = useContext(AppContext);

    if (carrinho && carrinho.length > 0) {
        return carrinho.map(({nome, quantidade})=> (<span>{nome} quantidade: {quantidade}</span>))
    }
    
    return (
        <span>Carrinho vazio</span>
    )
}