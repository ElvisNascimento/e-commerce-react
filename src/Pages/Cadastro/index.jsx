import React from "react";
import Footer from "../../components/Footer";
import Logo from '../../img/LogoDigital.png'
import './style.css'

export default function Cadastro(){

    return(
        <React.Fragment>
            <div className="container-md container m-3 border">
                <div className="">
                    <img src={Logo} />
                </div>
            <div className="container">
                </div>
                <div className="criar" style={{}}>
                    <span className="conta" >Criar Conta</span>
                </div>
                <form className="cad">
                    <div className="form-group">
                        <div className="formu1">
                            <span className="info">Informações Pessoais</span>
                            <hr className="quebra" />
                        </div>
                        <label className="labelNome" htmlFor="nome">Nome Completo*</label>
                        <input className="inputNome" type="text" placeholder="Insira seu nome"  />
                    </div>
                </form>
                
                <Footer/>
            </div>
        </React.Fragment>
    )
}