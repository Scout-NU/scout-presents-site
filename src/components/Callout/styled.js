import styled from 'styled-components';
import { PINK, BLACK } from '../../styles/styles';
import { min } from '../../styles/breakpoints';
import { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${PINK};
  text-align: center;
  white-space: nowrap;
  color: ${BLACK};
  position: relative;
  overflow-x: clip;
  padding: 3rem 0;
`;

export const LargeButton = styled.div`
  text-align: center;
  margin: auto;
  white-space: nowrap;
  width: 100%;
  ${min.tablet} {
    width: 75%;
  }
  ${min.desktop} {
    width: 33.33%;
  }
`;

export const sprinkleStyles = css`
  position: absolute;
  z-index: 1;
`;

export const LeftSprinkle = styled.img`
  ${sprinkleStyles};
  width: 248px;
  top: -4rem;
  left: -6rem;
  ${min.tablet} {
    width: 405px;
    top: -9rem;
    left: -7rem;
  }
  ${min.desktop} {
    width: 374px;
    top: -8rem;
    left: -6rem;
  }
`;

export const RightSprinkle = styled.img`
  ${sprinkleStyles};
  width: 129px;
  top: -3rem;
  right: -3rem;
  ${min.tablet} {
    width: 214px;
    top: -6rem;
    right: -3rem;
  }
  ${min.desktop} {
    width: 198px;
    top: -5rem;
    right: 5rem;
  }
`;
