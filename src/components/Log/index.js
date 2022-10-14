import React from "react"
import Logo from "./img/LogoDigital.png"
import Tenis1 from "./img/tenis1.png"
import Tenis2 from "./img/tenis2.png"

export default function Log() {
    return (
        <React.Fragment>
            <div className="container-md container mt-2 border">
                <div className="">
                    <img src={Logo} />
                </div>
            </div>
            <div className="display-grid col-6">
                <div>
                    <form>
                        <div>
                        <h3>Acesse sua conta</h3>
                        <p>Novo Cliente? Então registre-se <a href="">aqui</a>.</p>
                        </div>
                        <div className="mb-3 border">
                            <label className="form-label"><strong>Login *</strong></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3 border">
                            <label className="form-label"><strong>Senha *</strong></label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div>
                            <a href="">Esqueci minha senha</a>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Acessar Conta</button>
                        </div>
                        <div>
                            <p>Ou faça login com </p>
                        </div>
                    </form>
                </div>
                <div className="display-grid col-6">
                    <img src={Tenis1} />
                    <img src={Tenis2} />
                </div>
            </div>
        </React.Fragment>
    )
}