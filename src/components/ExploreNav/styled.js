import styled from "styled-components";
import {
  GREEN,
  P,
  H3,
  CREAM,
  BLUE,
  YELLOW,
  BLACK,
  fonts,
} from "../../styles/styles";
import { min } from "../../styles/breakpoints";
import Cursor from "../../images/cursor-pointer.svg";

export const LeftButton = styled.button`
  white-space: nowrap;
  height: 2rem;
  padding: 0rem 1.5rem;
  transform: skew(15deg);
  color: ${CREAM};
  background-color: transparent;
  cursor: url(${Cursor}) 20 20, pointer;
  border-radius: 2px;
  border: 2px solid ${YELLOW};
  margin-left: 0.5rem;
  margin-right: 2rem;
  text-align: center;
  margin-top: 1rem;
  ${min.tablet} {
    width: 25%;
  }
`;

export const ButtonText = styled(H3)`
  margin: 0.3rem 0;
  transform: skew(-15deg);
`;
