import styled from 'styled-components';
import { H2, MarginContainer } from './styles';
import { min } from './breakpoints';

export const BlurbContainer = styled(MarginContainer)`
  position: relative;
  text-align: center;
  padding: 3rem 0;
`;

export const Blurb = styled(H2)`
  margin: auto;
  ${min.tablet} {
    width: 75%;
  }
  ${min.desktop} {
    width: 83%;
  }
`;

export const SprinkleTriangle = styled.img`
  position: absolute;
  width: 20px;
  left: -3%;
  top: 10%;
  z-index: 1;
  ${min.tablet} {
    width: 31px;
    left: 4.2%;
    top: 15%;
  }
  ${min.desktop} {
    width: 44px;
    top: 20%;
  }
`;

export const SprinkleSquiggle = styled.img`
  position: absolute;
  right: 0;
  bottom: -3%;
  width: 39px;
  z-index: 1;
  ${min.tablet} {
    width: 67px;
  }
  ${min.desktop} {
    width: 85px;
  }
`;
