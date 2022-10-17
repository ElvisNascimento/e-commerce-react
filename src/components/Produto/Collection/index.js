import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Desconto from './img/Desconto.png';
import Supreme from './img/Supreme.png';
import Tenis from './img/Tenis.png';
import Headset from './img/Headset.png';

// IMPORTANTE
export default function Collection() {
    return (
        <React.Fragment>
            <div style={{height:'409px',width:'1440px',marginTop:'38px',marginLeft:'100px'}}>
                <div style={{marginBottom:'20px'}}>
                    <p style={{width:'238px', fontSize:'21px',fontWeight:'700',letterSpacing:'0.75px',color:'color: #474747'}}>Coleções em destaque</p>
                </div>
                <section className='card-deck d-flex' >
                    <div style={{width:'405px',height:'251px',border:'none',borderRadius:'8px',marginRight:'12px'}} className="card text-dark">
                        <img className="card-img" src={Supreme} alt="Supreme" />
                        <div className="card-img-overlay">
                            <img src={Desconto} />
                            <h5 className="card-title"><b>Novo Drop <br /> Supreme</b></h5>
                            <button className='btn btn-light'>Comprar</button>
                        </div>
                    </div>
                    <div style={{width:'405px',height:'251px',border:'none',borderRadius:'8px',marginRight:'12px'}} className="card text-dark">
                        <img className="card-img" src={Tenis} alt="Supreme" />
                        <div className="card-img-overlay">
                            <img src={Desconto} />
                            <h5 className="card-title"><b>Coleção <br /> Adidas</b></h5>
                            <button className='btn btn-light'>Comprar</button>
                        </div>
                    </div>
                    <div style={{width:'405px',height:'251px',border:'none',borderRadius:'8px',marginRight:'12px'}} className="card text-dark">
                        <img className="card-img" src={Headset} alt="Supreme" />
                        <div className="card-img-overlay">
                            <img src={Desconto} />
                            <h5 className="card-title"><b>Novo <br /> Beats Bass</b></h5>
                            <button className='btn btn-light'>Comprar</button>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}
