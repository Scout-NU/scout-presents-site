import { createGlobalStyle } from 'styled-components';
import { BLACK, CREAM } from '../../styles/styles';
import Cursor from '../../images/cursor.svg';
import CursorPointer from '../../images/cursor-pointer.svg';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${CREAM};
    background-color: ${BLACK};
    margin: 0;
    cursor: url(${Cursor}), auto;
  }
  a, button {
    cursor: url(${CursorPointer}), pointer;
  }
`;
