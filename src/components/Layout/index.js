import * as React from 'react';
import Footer from '../Footer';
import Nav from '../Nav';
import { GlobalStyle } from './styled';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
