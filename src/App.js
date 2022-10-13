// import Produtos from "./components/Produtos/index.js";
import React, { useState } from "react";
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import bannerFooter from "./components/banner-footer/index.js";

export default function App() {
  

  return (
    
      <>
      <BrowserRouter>
      
      <bannerFooter/>
      <Routes>
      <Route></Route>
      <Route></Route>

      </Routes>
      </BrowserRouter>
      </>
    
  )
}


