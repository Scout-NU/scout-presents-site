import React, { useState } from 'react';
import {
  StyledNav,
  Container,
  Links,
  InlineLink,
  SubmitContainer,
  Hamburger,
} from './styled';
import Button from '../Button';
import { Menu } from 'react-feather';
import Logo from '../../images/logo-white.svg';
import MobileMenu from '../MobileMenu';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledNav>
      <Container>
        <InlineLink to="/">
          <img alt="Presents" src={Logo} />
        </InlineLink>
        <Links>
          <InlineLink to="/about">
            <Button secondary>About</Button>
          </InlineLink>
          <InlineLink to="/explore">
            <Button secondary>Explore</Button>
          </InlineLink>
          <SubmitContainer>
            <Button to="/submit">Submit Work</Button>
          </SubmitContainer>
        </Links>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </Hamburger>
      </Container>
      <MobileMenu open={menuOpen} handleClose={() => setMenuOpen(false)} />
    </StyledNav>
  );
};

export default Nav;
