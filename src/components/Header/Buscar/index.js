import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import "./index.css";
import { wrapper } from "./style";
import { fontSize } from "@mui/system";

export default function Buscar(props) {
  const [conteudo, setConteudo] = useState("");

  let classes = "input";
  if (conteudo) {
    classes += " input-expanded";
  }

  function handleOnChange(event) {
    setConteudo(event.target.value);
  }

  return (
    <div style={{...wrapper,backgroundColor: props.backgroundColor || "white", }}>
      <Search className="icon" style={{fontSize : '2.5rem', color:'#999'}} />
      <input
        className={classes}
        placeholder="Pesquisar produto..."
        value={conteudo}
        onChange={(event) => {
          handleOnChange(event);
        }}
      />
    </div>
  );
}