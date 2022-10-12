// import Produtos from "./components/Produtos/index.js";
import React, { useState } from "react";
//import {Routes, Route, Navigate} from 'react-router-dom';
import Header from "./components/Header/index.js";
import Collection from "./components/Produto/Collection/index.js";
// import Linkicons from "./componets/Produto/Collection/Linkicons"
// import Bonés from "./components/Produtos/Bonés";
// import Calças from "./components/Produtos/Calças";
// import Camisetas from "./components/Produtos/Camisetas";
// import Headphones from "./components/Produtos/Headphones";
// import Tênis from "./components/Produtos/Tênis";


export const AppContext = React.createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <AppContext.Provider value={{ carrinho, setCarrinho }}>
      <>
        <Header />
        {/* <Produtos /> */}
        <Collection/>
      </>
        </AppContext.Provider>
        
        /* <BrowserRouter>
        //   <Linkicons/>
        //       <Routes>
        //         <Route path="/Camisetas" element={<Camisetas/>}/>
        //         <Route path="/Calças" element={<Calças/>}/>
        //         <Route path="/Bonês" element={<Bonés/>}/>
        //         <Route path="/Headphone" element={<Headphones/>}/>
        //         <Route path="/Ténis" element={<Tênis/>}/>
        //       </Routes>
        //   </BrowserRouter>*/
        
  )
  
}


