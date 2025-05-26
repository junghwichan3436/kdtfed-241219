import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Outlet />
        <ReactQueryDevtools initialIsOpen={true} buttonPosition="bottom-left" />
      </ThemeProvider>
    </>
  );
}

export default Root;
