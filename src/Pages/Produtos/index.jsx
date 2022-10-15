import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './styles.css'

export default function TodosProdutos() {
    return (
        <React.Fragment>
            <Header />
            <div className="container cabecalho">
                <div className="body">
                    <div className="div1">
                        <div>Resultados para “Tênis”</div>
                    </div>
                    <div className="div2">
                        <div>Resultados para “Tênis”</div>
                        <div>Resultados para “Tênis”</div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}