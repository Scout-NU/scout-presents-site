import styled from 'styled-components';
import { BLUE, MarginContainer, P, H2, H3, CREAM } from '../../styles/styles';
import { min } from '../../styles/breakpoints';

export const Container = styled(MarginContainer)`
  margin-bottom: 2.5rem;
  ${min.desktop} {
    padding: 0 7rem;
  }
  ${min.desktopLg} {
    padding: 0 10rem;
  }
`;

export const VideoContainer = styled.div`
  padding: 56.25% 0 0 0;
  position: relative;
`;

export const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ProjectName = styled(H2)`
  display: inline;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${BLUE};
  }
  ${min.tablet} {
    display: inline-block;
  }
`;

export const Separator = styled.span`
  margin: 0 1rem;
  display: none;
  ${min.tablet} {
    display: inline-block;
  }
`;

export const Date = styled(H3)`
  display: block;
  ${min.tablet} {
    display: inline-block;
  }
`;

export const Details = styled.div`
  ${min.tablet} {
    column-count: 2;
    column-fill: auto;
    height: 8rem;
  }
`;

export const StyledP = styled(P)`
  display: inline-block;
  width: 100%;
  margin-block: 0;
  a {
    color: ${CREAM};
  }
`;
