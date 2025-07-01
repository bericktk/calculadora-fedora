# 🧮 Calculadora React - Estilo Fedora

Este projeto é uma **calculadora funcional** construída com **React**, inspirada no design moderno e no tema escuro da calculadora do sistema operacional **Fedora**.

---

## 🚀 Funcionalidades

- **Operações Básicas**: Adição, subtração, multiplicação e divisão.
- **Funções Matemáticas**:
  - Parênteses `( )` para agrupamento de operações.
  - Raiz quadrada `√`.
  - Potência ao quadrado `x²`.
  - Módulo (`mod`).
  - Número Pi `π`.
  - Percentagem `%`.
- **Layout Moderno**: Interface escura com disposição dos botões baseada na calculadora do Fedora.
- **Design Responsivo**: Adapta-se bem a diferentes tamanhos de tela (otimizada para visualização vertical).
- **Cálculo de Expressões**: Avaliação completa com respeito à ordem das operações e parênteses.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias modernas da web:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **JavaScript (ES6+)**: Lógica da calculadora.
- **CSS3**: Estilização dos componentes com layout em Grid e tema escuro.

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/bericktk/calculadora-fedora-react.git
```

### 2. Acesse a pasta do projeto

```bash
cd calculadora-fedora-react
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie a aplicação

```bash
npm start
```

O navegador abrirá automaticamente em: [http://localhost:3000](http://localhost:3000)

---

## 📂 Estrutura do Projeto

```bash
src/
├── componentes/
│   ├── Botoes.js      # Componente reutilizável para cada botão
│   ├── Botoes.css     # Estilos específicos dos botões
│   ├── Display.js     # Componente do visor da calculadora
│   └── Display.css    # Estilos do visor
│
├── App.js             # Componente principal com a lógica da calculadora
└── App.css            # Estilos globais e layout geral
```

### Descrição dos principais arquivos:

- **App.js**: Gerencia o estado da calculadora (valor no visor, expressão completa) e implementa a lógica de cálculo.
- **componentes/Display.js**: Exibe o valor atual e a expressão no visor.
- **componentes/Botoes.js**: Componente para os botões da calculadora, reutilizável e estilizado via props.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 🙌 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir _issues_ ou enviar _pull requests_ com melhorias, correções ou novas funcionalidades.

---

## ✨ Autor

Desenvolvido por **[Bruno Erick](https://github.com/bericktk)**.
