import styled from 'styled-components';
import { CREAM, BLACK, MarginContainer, RED, P } from '../../styles/styles';
import { Instagram, Heart } from 'react-feather';
import { min } from '../../styles/breakpoints';

export const StyledFooter = styled.footer`
  background-color: ${CREAM};
  color: ${BLACK};
`;

export const StyledContainer = styled(MarginContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  padding: 2.5rem 0;
  justify-content: space-between;
`;

export const Links = styled.div`
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
  color: ${BLACK};
  ${min.tablet} {
    flex: 0 1 18%;
    order: 1;
  }
`;

export const InstagramIcon = styled(Instagram)`
  vertical-align: bottom;
`;

export const ScoutSite = styled.div`
  flex: 0 1 18%;
  text-align: center;
  ${min.tablet} {
    order: 3;
  }
  ${min.desktop} {
    flex: 0 1 15%;
  }
`;

export const Logo = styled.img`
  height: 6rem;
  ${min.desktop} {
    height: 8rem;
  }
`;

export const Signature = styled.div`
  flex: 1 1 100%;
  text-align: center;
  ${min.tablet} {
    flex: 0 1 auto;
    order: 2;
    vertical-align: bottom;
  }
`;

export const StyledP = styled(P)`
  margin-block: 0.5rem;
`;

export const HeartIcon = styled(Heart)`
  color: ${RED};
  fill: ${RED};
  vertical-align: middle;
`;
