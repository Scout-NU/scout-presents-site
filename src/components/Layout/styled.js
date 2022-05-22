import { createGlobalStyle } from 'styled-components';
import { BLACK, CREAM, CursorStyles, PointerStyles } from '../../styles/styles';

export const GlobalStyle = createGlobalStyle`
  html, body {
    position: relative;
    overflow-x: clip;
  }
  body {
    color: ${CREAM};
    background-color: ${BLACK};
    margin: 0;
    ${CursorStyles}
  }
  a, button {
    ${PointerStyles}
  }
`;
