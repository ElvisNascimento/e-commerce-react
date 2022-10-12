// import Produtos from "./components/Produtos/index.js";
import React, { useState } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Header from "./components/Header/index.js";
import Home from "./Pages/Home/index.js";
export const AppContext = React.createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <AppContext.Provider value={{ carrinho, setCarrinho }}>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path={'/'} element={<Navigate to={'./Pages/Home/'}/>} />
          <Route path={'/Pages/Home/'} element={Home()}/>
        </Routes>
      </React.Fragment>
    </AppContext.Provider>
  )
}