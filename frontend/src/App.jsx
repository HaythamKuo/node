import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { ResetStyle, GlobalStyle } from "./components/styles/GlobalStyle";
import theme from "./components/styles/Theme.style";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetStyle />
        <GlobalStyle />
        <RouterProvider router={router} />;
      </>
    </ThemeProvider>
  );
}

export default App;
