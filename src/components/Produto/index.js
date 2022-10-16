import * as React from 'react';
// import Comprar from "./Comprar"
import Sneakers from './skeakers.png'
import './styles.css'

export default function Produto(props) {
    return (
        <div className='produtoBase'>
            <div className='sneakerImg'>
                <img className="sneakerImg" src={Sneakers} alt=""></img>
            </div>
            <div className='descricaoItem'>
                <small color="text.secondary">Tênis</small>
                <p className='pCustom'>K-Swiss V8 - Masculino</p>
                <span className="precoInicial" style={{ textDecoration: "line-through" }}>$200</span>
                <span className="precoAtual">$100</span>
            </div>
            <span>
                {props.titulo}
            </span>
            {/* <Comprar titulo={props.titulo} /> */}
        </div>
    );
}