import createGlobalStyle from "styled-components";
import Reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

*{
  
}

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    --light-color:#fff;
    --dark-color: #000;
    --border-color:#ccc;
    --accent-color:#red
  }
`;
