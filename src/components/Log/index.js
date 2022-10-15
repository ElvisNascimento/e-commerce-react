import React from "react";
import "./index.css";
import Logo from "./img/LogoDigital.png";
import Tenis1 from "./img/tenis1.png";
import Tenis2 from "./img/tenis2.png";

export default function Log() {
    return (
        <React.Fragment>
            <div className="container-md container m-3 border">
                <div className="">
                    <img src={Logo} />
                </div>
            </div>
            <div id="pagLog" className="d-flex justify-content-center border">
                <div className="d-flex justify-content-start border">
                    <form className="form-control border">
                        <div>
                        <h2><strong>Acesse sua conta</strong></h2>
                        <p>Novo Cliente? Então registre-se <a href="">aqui</a>.</p>
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
                            <a href="">Esqueci minha senha</a>
                        </div>
                        <div className="d-grid gap-2 col-auto mx-auto mt-4">
                            <button type="submit" className="btn">Acessar Conta</button>
                        </div>
                        <div className="mt-4">
                            <p>Ou faça login com </p>
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