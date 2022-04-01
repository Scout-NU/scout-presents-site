import * as React from 'react';
import { Link } from 'gatsby';
import { StyledNav } from './styled';

const Nav = () => (
  <StyledNav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/explore">Explore</Link>
    <Link to="/submit">Submit Work</Link>
  </StyledNav>
);

export default Nav;
