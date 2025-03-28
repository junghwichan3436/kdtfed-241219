import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    ${reset}

    * {
      box-sizing: border-box;
    }

    :root {
      --light-color:#fff;
      --dark-color:#000;
      --circle-color:#00a5ff;
    }

    ul, li {
      list-style: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    body {
      width: 100%;
      height: 100vh;
      font-family: "Source Sans 3", sans-serif;
      background: linear-gradient(135deg, #e09, #d0e);
    }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
