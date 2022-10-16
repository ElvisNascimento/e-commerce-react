import React from "react";
import "./index.css";
import Logo from "./img/LogoDigital.png";
import Tenis1 from "./img/tenis1.png";
import Tenis2 from "./img/tenis2.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <React.Fragment>
            <div className="md m-3 border">
                <div className="">
                    <img src={Logo} />
                </div>
            </div>
            <div id="pagLog" className="d-flex justify-content-center border">
                <div className="d-flex justify-content-start border">
                    <form className="form-control border">
                        <div>
                        <h2><strong>Acesse sua conta</strong></h2>
                        <p>Novo Cliente? Então registre-se <Link to={'/cadastro'}>aqui</Link>.</p>
                        </div>
                        <div className="mb-3 border">
                            <label className="form-label"><strong>Login *</strong></label>
                            <input type="email" className="form-control" placeholder="Insira seu login ou email"/>
                        </div>
                        <div className="mb-3 border">
                            <label className="form-label"><strong>Senha *</strong></label>
                            <input type="password" className="form-control" placeholder="Insira sua senha"/>
                        </div>
                        <div>
                            <Link to={'/'}>Esqueci minha senha</Link>
                        </div>
                        <div className="d-grid gap-2 col-auto mx-auto mt-4">
                            <button type="submit" className="btn">Acessar Conta</button>
                        </div>
                        <div className="mt-4">
                            <p>Ou faça login com
                            <svg className="gmail" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.63636 21.0022H5.45456V11.7295L2.95434 7.36365L0 7.63857V19.3659C0 20.2699 0.732281 21.0022 1.63636 21.0022Z" fill="#0085F7"/>
                                <path d="M18.5449 21.0022H22.3631C23.2672 21.0022 23.9995 20.2699 23.9995 19.3659V7.63857L21.0494 7.36365L18.545 11.7295V21.0022H18.5449Z" fill="#00A94B"/>
                                <path d="M18.5456 4.63856L16.3027 8.91839L18.5456 11.7295L24.0001 7.63856V5.45676C24.0001 3.43448 21.6915 2.27948 20.0728 3.49312L18.5456 4.63856Z" fill="#FFBC00"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.45407 11.7295L3.31689 7.21494L5.45407 4.63855L11.9995 9.54763L18.5449 4.63855V11.7295L11.9995 16.6386L5.45407 11.7295Z" fill="#FF4131"/>
                                <path d="M0 5.45676V7.63856L5.45456 11.7295V4.63856L3.92728 3.49312C2.30864 2.27948 0 3.43448 0 5.45676H0Z" fill="#E51C19"/>
                            </svg>

                                <FacebookRoundedIcon className="fb"/></p>
                        </div>
                    </form>
                </div>
                <div className="d-flex justify-content-end border">
                    <img className="mb-5" src={Tenis1} />
                    <img className="mt-5" src={Tenis2} />
                </div>
            </div>
        </React.Fragment>
    )
}