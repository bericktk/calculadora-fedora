import React from "react";
import "./Display.css";

export function Display({ operador, value }) {
  return (
    <div className="tela-display">
      <div className="operador-display">{operador}</div>
      <div className="valor-display">{value}</div>
    </div>
  );
}
