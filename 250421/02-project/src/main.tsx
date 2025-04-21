import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
//타입스크립트에서는 안쓰는 것을 끌어오면 경고가 뜬다 이것은 정적호스팅을 해주는 넷리파이에서는 취약하다
import { darkTheme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
