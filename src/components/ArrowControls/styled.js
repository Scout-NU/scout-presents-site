import styled from 'styled-components';
import { YELLOW } from '../../styles/styles';

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const Arrow = styled.button`
  border: 0;
  background-color: transparent;
  color: ${YELLOW};
  padding: 0;
  z-index: 2;
`;
