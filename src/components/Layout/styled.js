import { createGlobalStyle } from 'styled-components';
import { BLACK, CREAM } from '../../styles/styles';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${CREAM};
    background-color: ${BLACK};
    margin: 0;
  }
`;
