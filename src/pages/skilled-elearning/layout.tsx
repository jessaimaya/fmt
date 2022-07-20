import styled, { ThemeProvider } from 'styled-components';

import Theme from './theme';

const Layout = styled.div.attrs({
  className: 'grid, min-h-screen',
})`
  background: ${(props) => props.theme.gray};
`;

const SkilledLayout = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>My layout</Layout>;
    </ThemeProvider>
  );
};

export default SkilledLayout;
