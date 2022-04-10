import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { H3, YELLOW, BLACK, CREAM } from '../../styles/styles';
import Cursor from '../../images/cursor-pointer.svg';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

const primaryStyles = css`
  padding: 0.5rem 1.5rem;
  transform: skew(15deg);
  color: ${(props) => (props.color === YELLOW ? BLACK : CREAM)};
  border-radius: 2px;
  border: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  &:hover {
    background-color: transparent;
    color: ${(props) => props.color};
  }
`;

const secondaryStyles = css`
  padding: 0.5rem 0;
  color: ${CREAM};
  background-color: transparent;
  border: 0px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${(props) => props.color};
  }
`;

export const StyledButton = styled.button`
  ${(props) => (props.secondary ? secondaryStyles : primaryStyles)}
  cursor: url(${Cursor}), pointer;
`;

// offsets the skew from transforming the button
export const ButtonText = styled(H3)`
  ${(props) => !props.secondary && 'transform: skew(-15deg);'}
  text-transform: lowercase;
  margin-block-start: 0;
  margin-block-end: 0;
  cursor: url(${Cursor}), pointer;
`;
