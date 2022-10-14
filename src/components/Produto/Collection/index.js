import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Desconto from '../../../img/Desconto.png'
import Supreme from '../../../img/Supreme.png'
import Tenis from '../../../img/Tenis.png'
import Headset from '../../../img/Headset.png'


export default function Collection() {
    return (
        <div className="container-md container mt-2 border">
            <div className='mt-2'>
                <p>Coleções em destaque</p>
            </div>
            <section className='card-deck d-flex justify-content-center' >
                <div className="card text-dark col-3 me-5">
                    <img className="card-img" src={Supreme} alt="Supreme" />
                    <div className="card-img-overlay">
                        <img src={Desconto} />
                        <h5 className="card-title"><b>Novo Drop <br/> Supreme</b></h5>
                        <button className='btn btn-light'>Comprar</button>
                    </div>
                </div>
                <div className="card text-dark col-3 me-5">
                    <img className="card-img" src={Tenis} alt="Supreme" />
                    <div className="card-img-overlay">
                        <img src={Desconto} />
                        <h5 className="card-title"><b>Coleção <br/> Adidas</b></h5>
                        <button className='btn btn-light'>Comprar</button>
                    </div>
                </div>
                <div className="card text-dark col-3 me-5">
                    <img className="card-img" src={Headset} alt="Supreme" />
                    <div className="card-img-overlay">
                        <img src={Desconto} />
                        <h5 className="card-title"><b>Novo <br/> Beats Bass</b></h5>
                        <button className='btn btn-light'>Comprar</button>
                    </div>
                </div>
            </section>
        </div>
    )
}