import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Collection from "../../components/Produto/Collection"
import Linkicons from "../../components/Produto/Collection/Linkicons/Linkicons.js";
import ProdutosAlta from "../../components/ProdutosAlta/produtosAlta";
import BannerFooter from "../../components/BannerFooter";
import Carrosel from "../../components/Carrosel";

let Home = () => {
    return(
        <div style={{ width: 1440,height: 3744,}}>
                <Header/>
                <Carrosel/>
                <Collection/>
                <Linkicons/>
                <ProdutosAlta/>
                <BannerFooter/>
                <Footer/>
        </div>
    );
}
export default Home;