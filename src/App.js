// import Produtos from "./components/Produtos/index.js";
import React, { useState } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Header from "./components/Header/index.js";

export const AppContext = React.createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <AppContext.Provider value={{ carrinho, setCarrinho }}>
      <>
        <Header />
        {/* <Produtos /> */}
      </>
    </AppContext.Provider>
  )
}


