// import Produtos from "./components/Produtos/index.js";
import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom';
//import Trabalhe from "./Pages/Categorias/Tenis/tenis.js";
import Home from "./Pages/Home/index.js";
import Bones from "./components/Produtos/Bones/";
import Calcas from "./components/Produtos/Calcas";
import Camisetas from "./components/Produtos/Camisetas";
import Headphones from "./components/Produtos/Headphones";
import Tenis from "./components/Produtos/Tenis/";
import Login from "./Pages/Login/index.js";
import Cadastro from "./Pages/Cadastro/index.jsx";

export const AppContext = React.createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <AppContext.Provider value={{ carrinho, setCarrinho }}>
      <React.Fragment>
           
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path="/camisetas" element={<Camisetas/>}/>
          <Route path="/calcas" element={<Calcas/>}/>
          <Route path="/bones" element={<Bones/>}/>
          <Route path="/headphones" element={<Headphones/>}/>
          <Route path="/tenis" element={<Tenis/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
          
                    
                    
            
      </React.Fragment>
    </AppContext.Provider>
  )
}
