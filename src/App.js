// import Produtos from "./components/Produtos/index.js";
import React, { useState } from "react";
<<<<<<< HEAD
import {Routes, Route} from 'react-router-dom';
import Bones from "./Pages/Categorias/Bones/bones.js";
import Calcas from "./Pages/Categorias/Calcas/calca.js";
import Camisetas from "./Pages/Categorias/Camisetas/camisetas.js";
import Headphones from "./Pages/Categorias/Headphones/head.js";
import Trabalhe from "./Pages/Categorias/Tenis/tenis.js";
import Home from "./Pages/Home/index.js";
=======
//import {Routes, Route, Navigate} from 'react-router-dom';
import Header from "./components/Header/index.js";
import Collection from "./components/Produto/Collection/index.js";
// import Linkicons from "./componets/Produto/Collection/Linkicons"
// import Bonés from "./components/Produtos/Bonés";
// import Calças from "./components/Produtos/Calças";
// import Camisetas from "./components/Produtos/Camisetas";
// import Headphones from "./components/Produtos/Headphones";
// import Tênis from "./components/Produtos/Tênis";

>>>>>>> 9d75d85d2502c435a20c80d1e1e1a3d9d91cc9bd

export const AppContext = React.createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <AppContext.Provider value={{ carrinho, setCarrinho }}>
<<<<<<< HEAD
      <React.Fragment>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/Pages/Home'} element={<Home/>}/>
          <Route path={'/Pages/Categorias/Bones'} element={Bones()}/>
          <Route path={'/Pages/Categorias/Calcas'}element={Calcas()}/>
          <Route path={'/Pages/Categorias/Camisetas'} element={Camisetas()} />
          <Route path={'/Pages/Categorias/Headphones'} element={Headphones()}/>
          <Route path={'/Pages/Categorias/Tenis'} element={Trabalhe()} />
        </Routes>
      </React.Fragment>
    </AppContext.Provider>
  )
}
=======
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


>>>>>>> 9d75d85d2502c435a20c80d1e1e1a3d9d91cc9bd
