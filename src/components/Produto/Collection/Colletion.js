<<<<<<< HEAD:src/components/Produto/Collection/index.js
import React from 'react';
=======
import { CardContent} from "@mui/material";
import { Container} from "@mui/system";
>>>>>>> 9d75d85d2502c435a20c80d1e1e1a3d9d91cc9bd:src/components/Produto/Collection/Colletion.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Desconto from '../../../img/Desconto.png'
import Supreme from '../../../img/Supreme.png'
import Tenis from '../../../img/Tenis.png'
import Headset from '../../../img/Headset.png'


<<<<<<< HEAD:src/components/Produto/Collection/index.js
export default function Collection() {
    return (
        <div className="container-md container mt-2 border">
            <div>
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
=======
export default function Colletion(){
    return(
        <section>
            <Container className="container-md mt-2 border">
            <p>Coleções em destaque</p>
            <CardContent></CardContent>
            </Container>

        </section>
       
>>>>>>> 9d75d85d2502c435a20c80d1e1e1a3d9d91cc9bd:src/components/Produto/Collection/Colletion.js
    )
}