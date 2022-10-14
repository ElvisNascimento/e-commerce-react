import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Collection from "../../components/Produto/Collection"

let Home = () => {
    return(
        <React.Fragment>
                <Header/>
                <Collection/>
                <Footer/>
        </React.Fragment>
    );

}
export default Home;