import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`;

const Layout = styled.div.attrs({
  className: 'grid, min-h-screen',
})`
  background: ${(props) => props.theme.gray};
`;

const SkilledLayout = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>My layout</Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default SkilledLayout;
