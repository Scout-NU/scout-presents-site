import * as React from 'react';
import Nav from '../Nav';
import { GlobalStyle } from './styled';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Nav />
    <main>{children}</main>
  </>
);

export default Layout;
