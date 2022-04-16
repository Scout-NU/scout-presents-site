import React from 'react';
import {
  StyledFooter,
  StyledContainer,
  Links,
  InstagramIcon,
  ScoutSite,
  Logo,
  Signature,
  HeartIcon,
} from './styled';
import { H3, P } from '../../styles/styles';
import ScoutLogo from '../../images/scout-logo.svg';

const Footer = () => (
  <StyledFooter>
    <StyledContainer>
      <Links>
        <H3 bold>About</H3>
        <H3 bold>Explore</H3>
        <H3 bold>Submit</H3>
        <H3 bold>
          <InstagramIcon /> Scout
        </H3>
      </Links>
      <ScoutSite>
        <Logo alt="Scout" src={ScoutLogo} />
        <H3 bold>Scout's Website</H3>
      </ScoutSite>
      <Signature>
        <P>
          Made with <HeartIcon /> by Scout
        </P>
      </Signature>
    </StyledContainer>
  </StyledFooter>
);

export default Footer;
