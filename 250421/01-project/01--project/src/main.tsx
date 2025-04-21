import { createRoot } from "react-dom/client";
import App from "./App05.tsx";
import { ThemeProvider } from "styled-components";
// import { DefaultTheme } from "styled-components";/

const darkTheme = {
  textColor: "#fff",
  background: "#000",
};

const lightTheme = {
  textColor: "#000",
  background: "#fff",
};

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);
