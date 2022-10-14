// import Produtos from "./components/Produtos/index.js";
import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Bones from "./Pages/Categorias/Bones/bones.js";
import Calcas from "./Pages/Categorias/Calcas/calca.js";
import Camisetas from "./Pages/Categorias/Camisetas/camisetas.js";
import Headphones from "./Pages/Categorias/Headphones/head.js";
import Trabalhe from "./Pages/Categorias/Tenis/tenis.js";
import Home from "./Pages/Home/index.js";

export const AppContext = React.createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <AppContext.Provider value={{ carrinho, setCarrinho }}>
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
