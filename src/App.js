import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Linkicons from "./components/Produto/Collection/Linkicons"
import Bones from "./components/Produtos/Bones/";
import Calças from "./components/Produtos/Calcas";
import Camisetas from "./components/Produtos/Camisetas";
import Headphones from "./components/Produtos/Headphones";
import Tenis from "./components/Produtos/Tenis/";

export default function App() {
    return (
            <div>
                
                <Linkicons/>
                    <Routes>
                        <Route path="camisetas" element={<Camisetas/>}/>
                        <Route path="calças" element={<Calças/>}/>
                        <Route path="bonês" element={<Bones/>}/>
                        <Route path="headphone" element={<Headphones/>}/>
                        <Route path="tenis" element={<Tenis/>}/>
                    </Routes>
                
            </div>
   );
}