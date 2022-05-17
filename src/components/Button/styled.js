import styled, { css } from 'styled-components';
import {
  H1,
  H3,
  YELLOW,
  BLACK,
  CREAM,
  PointerStyles,
} from '../../styles/styles';

const primaryStyles = css`
  padding: 0.5rem 1.5rem;
  transform: skew(15deg);
  color: ${(props) => (props.color === YELLOW ? BLACK : CREAM)};
  border-radius: 2px;
  border: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  text-transform: lowercase;
  &:hover {
    background-color: transparent;
    color: ${(props) => props.color};
  }
`;

const secondaryStyles = css`
  padding: 0.5rem 0;
  color: inherit;
  background-color: transparent;
  border: 0px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${(props) => props.color};
  }
`;

export const StyledButton = styled.button`
  ${(props) => (props.secondary ? secondaryStyles : primaryStyles)}
  ${PointerStyles}
`;

// offsets the skew from transforming the button
const textStyles = css`
  ${(props) => !props.secondary && 'transform: skew(-15deg);'}
  margin-block-start: 0;
  margin-block-end: 0;
  ${PointerStyles}
`;

export const ButtonText = styled(H3)`
  ${textStyles}
`;

export const JumboText = styled(H1)`
  ${textStyles}
`;
