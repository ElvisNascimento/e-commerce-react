import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import "./index.css";
import { wrapper } from "./style";

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
      <Search className="icon" />
      <input
        className={classes}
        placeholder="Buscar"
        value={conteudo}
        onChange={(event) => {
          handleOnChange(event);
        }}
      />
    </div>
  );
}