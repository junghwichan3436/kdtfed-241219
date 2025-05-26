import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import Root from "./Root";

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ThemeProvider theme={defaultTheme}>
      <Root />
    </ThemeProvider>
  </RecoilRoot>
);
