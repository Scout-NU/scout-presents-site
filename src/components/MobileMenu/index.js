import React from 'react';
import {
  Container,
  LinksContainer,
  CloseButton,
  StyledLink,
  StyledH2,
} from './styled';
import { X } from 'react-feather';

const MobileMenu = ({ open, handleClose }) => (
  <Container open={open}>
    <LinksContainer>
      <CloseButton onClick={handleClose}>
        <X />
      </CloseButton>
      <StyledLink to="/about" onClick={handleClose}>
        <StyledH2>About</StyledH2>
      </StyledLink>
      <StyledLink to="/explore" onClick={handleClose}>
        <StyledH2>Explore</StyledH2>
      </StyledLink>
      <StyledLink to="/submit" onClick={handleClose}>
        <StyledH2>Submit Work</StyledH2>
      </StyledLink>
    </LinksContainer>
  </Container>
);

export default MobileMenu;
