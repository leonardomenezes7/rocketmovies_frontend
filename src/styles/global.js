import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  ::-webkit-scrollbar {
    background: none;
    width: .8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.pink};;
    border-radius: .8rem;
  }

  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.bg_800};
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
    font-family: "Roboto Slab", serif;
  }

  button, textarea, input {
    font-family: "Roboto Slab", serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
    width: fit-content;
  }

  button, a {
    cursor: pointer;
    transition: filter .3s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }
`