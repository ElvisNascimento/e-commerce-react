import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function TodosProdutos() {
    return (
        <React.Fragment>
            <div style={{ width: '100%', height: '100vh', backgroundColor: '#888' }}>
                <Header />
                <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', backgroundColor: '#999' }}>
                    <div style={{ width: '100%', height: 100, backgroundColor: 'red' }}>
                        <div >Resultados para “Tênis”</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: 100, height: '100vh', backgroundColor: 'blue' }}>
                        <div >Resultados para “Tênis”</div>
                        <div style={{ width: 100, height: '100vh', backgroundColor: 'green' }}>Resultados para “Tênis”</div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}