import React from "react";
import Footer from "../../components/Footer";
import Logo from '../../img/LogoDigital.png';
import './style.css';
import { Checkbox } from "@mui/material";
import { pink } from '@mui/material/colors';

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
                            <label htmlFor="nome" className="labelNome">Nome Completo*</label>
                            <input  required  pattern="(?=.*[A-Z])(?=.*[a-z]){2,}" type="text" className="form-control inputNome" id="nome" placeholder="Insira seu nome" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpf" className="labelCpf">CPF*</label>
                            <input required  pattern="[0-9]{11}" type="text" className="form-control inputCpf" id="cpf" placeholder="Insira seu CPF" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="labelEmail">E-mail*</label>
                            <input required type="email" className="form-control inputEmail" id="email" placeholder="Insira seu E-mail" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="celular" className="labelCelular">Celular*</label>
                            <input required type="text" pattern="[0-9]{11}" className="form-control inputCelular" id="celular" placeholder="Insira seu celular" />
                        </div>
                    </div>
                    <div className="form-group formu2">
                        <div className="form-group">
                            <span className="infoE">Informações de Entrega</span>
                            <hr className="quebra" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endereco" className="labelEndereco">Endereço*</label>
                            <input required pattern="(?=.*[A-Z])(?=.*[a-z]){2,}" type="text" className="form-control inputEndereco" id="endereco" placeholder="Insira seu endereço" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bairro" className="labelBairro">Bairro*</label>
                            <input required pattern="(?=.*[A-Z])(?=.*[a-z]){2,}" type="text" className="form-control inputBairro" id="endereco" placeholder="Insira seu bairro" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cidade" className="labelCidade">Cidade*</label>
                            <input required pattern="(?=.*[A-Z])(?=.*[a-z]){2,}" type="text" className="form-control inputCidade" id="cidade" placeholder="Insira sua cidade" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cep" className="labelCep">CEP*</label>
                            <input required pattern="[0-9]{8}" type="text" className="form-control inputCep" id="cep" placeholder="Insira seu CEP" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="complemento" className="labelComp">Complemento</label>
                            <input pattern="(?=.*[A-Z])(?=.*[a-z]){2,}" type="text" className="form-control inputComp" id="complemento" placeholder="Insira seu complemento" />
                        </div>
                    </div>
                    <div className="form-check check">
                        <input type="checkbox" className="cBox" id="exampleCheck1"/>
                        <label className="cBoxLabel" htmlFor="exampleCheck1">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
                    </div>
                    <div className="btnCad">
                        <button className="btnConf">Criar Conta</button>
                    </div>
                </form>
                <Footer/>
            </div>
        </React.Fragment>
    )
}