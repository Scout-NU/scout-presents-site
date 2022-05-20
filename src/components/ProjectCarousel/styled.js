import styled from 'styled-components';
import { min } from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  overflow-x: hidden;
`;

export const Slide = styled.div`
  flex-shrink: 0;
  padding-left: ${(props) => (props.selected ? '0' : '1rem')};
  width: ${(props) => (props.selected ? '66%' : '33%')};
  order: ${(props) => (props.selected ? '1' : !props.next ? '3' : '2')};

  ${min.tablet} {
    ${(props) => !props.selected && 'margin-top: 3rem'}
  }
`;

export const Thumbnail = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 100%;
`;
