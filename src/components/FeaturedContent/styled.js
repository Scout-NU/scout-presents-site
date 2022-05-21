import styled from 'styled-components';
import { MarginContainer, P } from '../../styles/styles';
import { min } from '../../styles/breakpoints';
import { css } from 'styled-components';

export const OverflowContainer = styled.div`
  overflow-x: clip;
  position: relative;
`;

export const FlexContainer = styled(MarginContainer)`
  margin-bottom: 3rem;
  display: flex;
  position: relative;
  flex-direction: column;
  ${min.desktop} {
    flex-direction: row;
    padding-top: 8rem;
  }
`;

export const Thumbnail = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 100%;
  ${min.desktop} {
    width: 58%;
    margin-right: 1rem;
  }
`;

export const Details = styled.div`
  ${min.tablet} {
    width: 75%;
  }
  ${min.desktop} {
    width: 42%;
  }
`;

export const Description = styled(P)`
  ${min.desktop} {
    width: 80%;
  }
`;

const sprinkleStyles = css`
  position: absolute;
  z-index: 1;
  display: none;
  ${min.desktop} {
    display: block;
  }
`;

export const TopLeftCollage = styled.img`
  ${sprinkleStyles}
  top: 0;
  left: -6.5rem;
`;

export const BottomRightCollage = styled.img`
  ${sprinkleStyles}
  bottom: -6rem;
  right: 0;
`;
