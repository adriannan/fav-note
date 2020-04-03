import React from 'react';
import { ThemeProvider } from 'styled-components';
import Input from 'components/atoms/Input';
import Card from 'components/molecules/Card';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello!</h1>
        <Input placeholder="input" />
        <Input search placeholder="search" />
        <Card cardType="twitter" />
        <Card cardType="article" />
      </>
    </ThemeProvider>
  </>
);

export default Root;
