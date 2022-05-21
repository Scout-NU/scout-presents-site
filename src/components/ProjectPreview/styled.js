import styled, { css } from 'styled-components';
import { min } from '../../styles/breakpoints';
import { MarginContainer, CREAM } from '../../styles/styles';

export const Container = styled.div`
  border-top: 0.5px solid ${CREAM};
  border-bottom: 0.5px solid ${CREAM};
  overflow-x: clip;
`;

export const FlexContainer = styled(MarginContainer)`
  display: flex;
  flex-direction: column;
  position: relative;
  ${min.desktop} {
    flex-direction: row;
  }
`;

export const Overview = styled.div`
  flex: 50%;
  padding: 3rem 0;
  ${min.desktop} {
    border-right: 0.25px solid ${CREAM};
    padding: 6rem 1rem 3rem 0;
  }
`;

export const Content = styled.div`
  flex: 50%;
  padding-bottom: 3rem;
  ${min.desktop} {
    border-left: 0.25px solid ${CREAM};
    padding: 10rem 0 3rem 1rem;
  }
`;

const sprinkle1Styles = css`
  width: 152px;
  bottom: -4rem;
  ${min.desktop} {
    width: 241px;
    bottom: -2rem;
  }
`;

const sprinkle2Styles = css`
  width: 262px;
  bottom: -7rem;
  left: -7rem;
  ${min.tablet} {
    bottom: -8rem;
  }
  ${min.desktop} {
    width: 486px;
    bottom: -7rem;
    left: -10rem;
  }
`;

const sprinkle3Styles = css`
  width: 232px;
  bottom: -6rem;
  left: -4rem;
  ${min.tablet} {
    bottom: -7rem;
    left: -5rem;
  }
  ${min.desktop} {
    width: 367px;
    bottom: -2rem;
    left: -7rem;
  }
`;

export const SprinkleCollage = styled.img`
  position: absolute;
  z-index: 1;
  ${(props) =>
    props.i === 0
      ? sprinkle1Styles
      : props.i === 1
      ? sprinkle2Styles
      : sprinkle3Styles};
`;
