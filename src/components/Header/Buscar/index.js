import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import "./index.css";

export default function Buscar(props) {
  const [conteudo, setConteudo] = useState("");

  // let classes = "input";
  // if (conteudo) {
  //   classes += " input-expanded";
  // }

  // function handleOnChange(event) {
    // setConteudo(event.target.value);
  // }

  return (
    <div className="buscarHeader">
      <input className="input" type="" name="" value="" placeholder="Pesquisar produto..." />
      <div className="iconeLupa">  
      <Search style={{fontSize: '2.3rem'}} />
      </div>
    </div>
  );
}