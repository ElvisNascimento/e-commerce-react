import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function BannerFooter() {
    return (
        <React.Fragment>
        <section>
            <div className='r1'>
                    <div className="r2">
                     Oferta especial
                    </div>
                    <div className="r27">
                        <span>Air Jordan edição de colecionador</span>
                    </div>
                    <div className='d-flex col'>
                    <div className="r271">
                         <span style={{ fontStyle: "normal", fontWeight: "400", fontSize: "16px", letterSpacing: "1px", color: "#474747" }}>Lorem ipsum dolo sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliqui</span>
                    </div>

                    <div className="r273">
                    <Link to='/'>
                        <button style={{backgroundColor: " #C92071", color: '#F5F5F5', height: '40px', width: '200px', fontWeight: '700',fontSize: '14px', lineHeight:'22px', letterSpacing:'0.75px', borderRadius:'8px', border: 'none'}}>Ver Oferta</button>
                    </Link>
                    </div>
                    </div>                           
            <div className="imagem">
                <img src="tenis.png" alt=""></img>
            </div>
        </div>
    </section>
    </React.Fragment>
)
}
// comentario