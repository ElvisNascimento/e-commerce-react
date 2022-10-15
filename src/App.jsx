// import Produtos from "./components/Produtos/index.js";
import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Bones from "./Pages/Categorias/Bones/bones.js";
import Calcas from "./Pages/Categorias/Calcas/calca.js";
import Camisetas from "./Pages/Categorias/Camisetas/camisetas.js";
import Headphones from "./Pages/Categorias/Headphones/head.js";
import Cadastro from "./Pages/Categorias/Trabalhe/index.js";
import Trabalhe from "./Pages/Categorias/Tenis/index.js";
import Home from "./Pages/Home/index.js";
import TodosProdutos from "./Pages/Produtos/index.jsx";
export const AppContext = React.createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <AppContext.Provider value={{ carrinho, setCarrinho }}>
      <React.Fragment>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/produtos'} element={<TodosProdutos/>}/>
          <Route path={'/categorias/bones'} element={Bones()}/>
          <Route path={'/categorias/calcas'}element={Calcas()}/>
          <Route path={'/categorias/camisetas'} element={Camisetas()} />
          <Route path={'/categorias/headphones'} element={Headphones()}/>
          <Route path={'/categorias/tenis'} element={Trabalhe()} />
          <Route path={'/cadastro'}element={<Cadastro/>}/>
        </Routes>
      </React.Fragment>
    </AppContext.Provider>
  )
}