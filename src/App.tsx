import React from "react";
import './shared/styles/customization.scss';
import HomePage from "./pages/home";
import { ThemeProvider } from "styled-components";
import { GlobalContainer, GlobalStyle } from "./shared/styles/global.styles";
import { Header } from "./shared/components/header";


export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <GlobalContainer>
          <Header />
          <HomePage />
        </GlobalContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
