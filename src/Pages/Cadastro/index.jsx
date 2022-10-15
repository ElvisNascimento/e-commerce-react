import React from "react";
import Footer from "../../components/Footer";
import Logo from '../../img/LogoDigital.png'
import './style.css'

export default function Cadastro(){

    return(
        <React.Fragment>
            <div className="container-md container m-3 border">
                <div className="logo">
                    <img src={Logo} />
                </div>
            <div className="container">
                </div>
                <div className="criar">
                    <span className="conta" >Criar Conta</span>
                </div>
                <form className="cad">
                    <div className="form-group formu1">
                        <div className="form-group">
                            <span className="info">Informações Pessoais</span>
                            <hr className="quebra" />
                        </div>
                        <div className="form-group">
                            <label for="nome" className="labelNome">Nome Completo*</label>
                            <input  required  pattern="[A-Za-z]" type="text" className="form-control inputNome" id="nome" placeholder="Insira seu nome" />
                        </div>
                        <div className="form-group">
                            <label for="cpf" className="labelCpf">CPF*</label>
                            <input required  pattern="[0-9]{11}" type="text" className="form-control inputCpf" id="cpf" placeholder="Insira seu CPF" />
                        </div>
                        <div className="form-group">
                            <label for="email" className="labelEmail">E-mail*</label>
                            <input required type="email" className="form-control inputEmail" id="email" placeholder="Insira seu E-mail" />
                        </div>
                        <div className="form-group">
                            <label for="celular" className="labelCelular">Celular*</label>
                            <input required type="text" pattern="[0-9]{11}" className="form-control inputCelular" id="celular" placeholder="Insira seu celular" />
                        </div>
                    </div>
                </form>
                
                <Footer/>
            </div>
        </React.Fragment>
    )
}