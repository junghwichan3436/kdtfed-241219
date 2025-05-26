import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

*{
  box-sizing: border-box;
}

ul,li {
  list-style: none;
}

a{
  text-decoration: none;
  color: inherit;
}

html {
  font-size: 62.5%;
}

body{
  font-size: 1.6rem;
  width: 100%;
  height: 2000px;
  background: var(--dark-color);
}

:root {
  --light-color: #fff;
  --dark-color: #000;
  --accent-color: #dc143c;
  --border-color: #ccc;
}


`;

export default GlobalStyles;
