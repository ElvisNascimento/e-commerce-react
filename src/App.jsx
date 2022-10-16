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
import TodosProdutos from "./Pages/TodosProdutos/index.jsx";
import DetalhesProduto from "./components/DetalhesProduto/DetalhesProduto.js";
import Blog from "./Pages/Informacao/Blog/index.js";
import MeusPedidos from "./Pages/Informacao/MeusPedidos/index.js";
import Seguranca from "./Pages/Informacao/Seguranca/index.js";
import SobreDripStore from "./Pages/Informacao/SobreDripStore/index.js";
import TrabalheConosco from "./Pages/Informacao/TrabalheConosco/index.js";
import Wishlist from "./Pages/Informacao/Wishlist/index.js";
import PaginaConstrucao from "./Pages/PaginaConstrucao/index.jsx";
import NotFound from "./Pages/NotFound/index.jsx";


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
          <Route path={'/produtos'} element={<TodosProdutos/>}/>
          <Route path="/camisetas" element={<Camisetas/>}/>
          <Route path="/calcas" element={<Calcas/>}/>
          <Route path="/bones" element={<Bones/>}/>
          <Route path="/headphones" element={<Headphones/>}/>
          <Route path="/tenis" element={<Tenis/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/detalhesProduto' element={<DetalhesProduto/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/pedidos" element={<MeusPedidos/>}/>
          <Route path='/seguranca' element={<Seguranca/>}/>
          <Route path="/sobre" element={<SobreDripStore/>}/>
          <Route path="/trabalhe" element={<TrabalheConosco/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/construcao" element={<PaginaConstrucao/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </React.Fragment>
    </AppContext.Provider>
  )
}
