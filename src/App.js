import React, { useState } from "react";
import { Botoes } from "./componentes/Botoes";
import { Display } from "./componentes/Display";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [expressao, setExpressao] = useState("");

  const limparTela = () => {
    setDisplayValue("0");
    setExpressao("");
  };

  const inputExpressao = (char) => {
    if (displayValue === "0" || displayValue === "Erro") {
      setDisplayValue(char);
    } else {
      setDisplayValue(displayValue + char);
    }
  };

  const manipularOperadorUnario = (operador) => {
    try {
      const valorAtual = parseFloat(displayValue);
      if (isNaN(valorAtual)) return;

      let resultado;
      if (operador === "√") {
        resultado = Math.sqrt(valorAtual);
      } else if (operador === "x²") {
        resultado = Math.pow(valorAtual, 2);
      } else if (operador === "%") {
        resultado = valorAtual / 100;
      }

      setDisplayValue(String(resultado));
    } catch (error) {
      setDisplayValue("Erro");
    }
  };

  const avaliarExpressao = () => {
    if (displayValue === "Erro" || displayValue === "0") return;

    try {
      let expr = displayValue
        .replace(/x/g, "*")
        .replace(/÷/g, "/")
        .replace(/mod/g, "%")
        .replace(/π/g, Math.PI.toString())
        .replace(/,/g, ".");

      const caracteresPermitidos = /^[0-9+\-*/.() \s]+$/;
      if (!caracteresPermitidos.test(expr)) {
        throw new Error("Expressão inválida");
      }

      const resultado = eval(expr);

      if (isNaN(resultado) || !isFinite(resultado)) {
        throw new Error("Cálculo inválido");
      }

      setExpressao(`${displayValue} =`);
      setDisplayValue(String(resultado));
    } catch (error) {
      setDisplayValue("Erro");
    }
  };

  return (
    <div className="calculadora-fedora">
      <Display operador={expressao} value={displayValue} />
      <div className="botoes-fedora">
        <Botoes className="funcao" onClick={limparTela} label="C" />
        <Botoes
          className="funcao"
          onClick={() => inputExpressao("(")}
          label="("
        />
        <Botoes
          className="funcao"
          onClick={() => inputExpressao(")")}
          label=")"
        />
        <Botoes
          className="funcao"
          onClick={() => inputExpressao(" mod ")}
          label="mod"
        />
        <Botoes
          className="funcao"
          onClick={() => inputExpressao("π")}
          label="π"
        />

        <Botoes onClick={() => inputExpressao("7")} label="7" />
        <Botoes onClick={() => inputExpressao("8")} label="8" />
        <Botoes onClick={() => inputExpressao("9")} label="9" />
        <Botoes
          className="operador"
          onClick={() => inputExpressao(" ÷ ")}
          label="÷"
        />
        <Botoes
          className="funcao"
          onClick={() => manipularOperadorUnario("√")}
          label="√"
        />

        <Botoes onClick={() => inputExpressao("4")} label="4" />
        <Botoes onClick={() => inputExpressao("5")} label="5" />
        <Botoes onClick={() => inputExpressao("6")} label="6" />
        <Botoes
          className="operador"
          onClick={() => inputExpressao(" x ")}
          label="x"
        />
        <Botoes
          className="funcao"
          onClick={() => manipularOperadorUnario("x²")}
          label="x²"
        />

        <Botoes onClick={() => inputExpressao("1")} label="1" />
        <Botoes onClick={() => inputExpressao("2")} label="2" />
        <Botoes onClick={() => inputExpressao("3")} label="3" />
        <Botoes
          className="operador"
          onClick={() => inputExpressao(" - ")}
          label="-"
        />
        <Botoes className="igual" onClick={avaliarExpressao} label="=" />

        <Botoes
          className="zero"
          onClick={() => inputExpressao("0")}
          label="0"
        />
        <Botoes onClick={() => inputExpressao(",")} label="," />
        <Botoes
          className="funcao"
          onClick={() => manipularOperadorUnario("%")}
          label="%"
        />
        <Botoes
          className="operador"
          onClick={() => inputExpressao(" + ")}
          label="+"
        />
      </div>
    </div>
  );
}
export default App;
