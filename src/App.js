import React from "react";
import { Routes, Route} from 'react-router-dom';
import Linkicons from "./components/Produto/Collection/Linkicons"
import Bones from "./components/Produtos/Bones/";
import Calcas from "./components/Produtos/Calcas";
import Camisetas from "./components/Produtos/Camisetas";
import Headphones from "./components/Produtos/Headphones";
import Tenis from "./components/Produtos/Tenis/";

export default function App() {
    return (
            <div>
                
                <Linkicons/>
                    <Routes>
                        <Route path="camisetas" element={<Camisetas/>}/>
                        <Route path="calcas" element={<Calcas/>}/>
                        <Route path="bones" element={<Bones/>}/>
                        <Route path="headphones" element={<Headphones/>}/>
                        <Route path="tenis" element={<Tenis/>}/>
                    </Routes>
                
            </div>
   );
}