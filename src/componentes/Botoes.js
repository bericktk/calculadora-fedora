import React from "react";
import "./Botoes.css";

export function Botoes({ className, onClick, label }) {
  const classes = `botao ${className || ""}`;

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
}
