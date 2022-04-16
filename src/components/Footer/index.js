import React from 'react';
import {
  StyledFooter,
  StyledContainer,
  Links,
  InstagramIcon,
  ScoutSite,
  Logo,
  Signature,
  StyledP,
  HeartIcon,
} from './styled';
import { A } from '../../styles/styles';
import ScoutLogo from '../../images/scout-logo.svg';
import Button from '../../components/Button';

const Footer = () => (
  <StyledFooter>
    <StyledContainer>
      <Links>
        <Button secondary to="/about">
          About
        </Button>
        <Button secondary to="/explore">
          Explore
        </Button>
        <Button secondary to="/submit">
          Submit Work
        </Button>
        <A href="https://www.instagram.com/neuscout/" target="_blank">
          <Button secondary>
            <InstagramIcon /> Scout
          </Button>
        </A>
      </Links>
      <ScoutSite>
        <A href="https://scout.camd.northeastern.edu/" target="_blank">
          <Logo alt="Scout" src={ScoutLogo} />
          <Button secondary>Scout's Website</Button>
        </A>
      </ScoutSite>
      <Signature>
        <StyledP>
          Made with <HeartIcon /> by Scout
        </StyledP>
      </Signature>
    </StyledContainer>
  </StyledFooter>
);

export default Footer;
