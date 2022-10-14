import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Produtos from "../../components/Produtos";
import ProdutosAlta from "../../components/ProdutosAlta/produtosAlta";
let Home = () => {
    return(
        <React.Fragment>
                <Header/>
                {/* <Produtos /> */}
                <ProdutosAlta/>
                <Footer/>
        </React.Fragment>
    );

}
export default Home;