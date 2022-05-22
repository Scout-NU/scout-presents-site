import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  StyledFooter,
  StyledContainer,
  Links,
  ScoutSite,
  Logo,
  Signature,
  StyledP,
  HeartIcon,
} from './styled';
import { A } from '../../styles/styles';
import ScoutLogo from '../../images/logos/scout-logo.svg';
import Button from '../Button';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const footerQuery = useStaticQuery(graphql`
    query FooterQuery {
      prismicFooter {
        data {
          social_links {
            type
            url {
              url
            }
            text {
              text
            }
          }
          scout_url {
            url
          }
        }
      }
    }
  `);

  const {
    prismicFooter: {
      data: { social_links: socialLinks, scout_url: scoutUrl },
    },
  } = footerQuery;

  return (
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
          <SocialLinks links={socialLinks} />
        </Links>
        <ScoutSite>
          <A href={scoutUrl.url} target="_blank">
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
};

export default Footer;
