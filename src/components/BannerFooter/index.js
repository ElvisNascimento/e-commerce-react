import React from 'react';
import './styles.css';
import circulo from '../../components/BannerFooter/circulo.png';
import tenis from '../../components/BannerFooter/tenis.png';
import { Link } from 'react-router-dom';

export default function BannerFooter() {
    return (
        <React.Fragment>
            <div style={{ width: '1440px', height: '553px' }}>
                <div className='placeholderBF'>
                    <div className='circuloFundo'>
                        <img src={circulo} alt="" />
                    </div>
                    <div className='tenisFooter'>
                        <img src={tenis} alt="" />
                    </div>
                </div>
                <section>
                    <div className="r2">
                        Oferta especial
                    </div>
                    <div className="r27">
                        <span>Air Jordan edição de colecionador</span>
                    </div>
                    <div className="r271">
                        <span>Lorem ipsum dolo sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip</span>
                        <div>
                            <Link to={'/detalhesProduto'}>
                                <button style={{ marginTop: '30px', width: '200px', height: '40px', color: '#f5f5f5', backgroundColor: '#c92071', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '14px', letterSpacing: '0.75px' }}>Ver Oferta</button>
                            </Link>
                        </div>
                    </div>

                </section>
            </div>
        </React.Fragment>
    )
}