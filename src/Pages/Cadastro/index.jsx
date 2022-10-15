import React from "react";
import Footer from "../../components/Footer";
import Logo from '../../img/LogoDigital.png'

export default function Cadastro(){

    return(
        <React.Fragment>
            <div className="container-md container m-3 border">
                <div className="">
                    <img src={Logo} />
                </div>
            </div>

            <Footer/>
        </React.Fragment>
    )
}