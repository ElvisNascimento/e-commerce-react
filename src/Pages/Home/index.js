import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Collection from "../../components/Produto/Collection"
import Linkicons from "../../components/Produto/Collection/Linkicons/Linkicons.js";
import ProdutosAlta from "../../components/ProdutosAlta/produtosAlta";
import BannerFooter from "../../components/BannerFooter";

let Home = () => {
    return(
        <React.Fragment>
                <Header/>
                <ProdutosAlta/>
                <Collection/>
                <Linkicons/>
                {/* <BannerFooter/> */}
                <Footer/>
        </React.Fragment>
    );
}
export default Home;