import React from 'react';
import './styles.css';
import circulo from '../../components/BannerFooter/circulo.png';
import tenis from '../../components/BannerFooter/tenis.png';

export default function BannerFooter() {
    return (
        <React.Fragment>
            <div className='placeholderBF'>
                <div className='circuloFundo'>
                    <img src={circulo} alt="" />
                </div>
                {/* <div className='tenisFooter'>
                    <img src={tenis} alt="" />
                </div> */}
            </div>
            {/* <section>
                <div className="r2">
                    Oferta especial
                </div>
                <div className="r27">
                    <span>Air Jordan edição de colecionador</span>
                </div>
                <div className="r271">
                    <span>Lorem ipsum dolo sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliqui</span>
                </div>
                <div className="r273 d-flex between">
                    <button>Ver Oferta</button>
                </div>
                
            </section> */}
        </React.Fragment>
    )
}