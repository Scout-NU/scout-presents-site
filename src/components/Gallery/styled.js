import styled from 'styled-components';
import { min } from '../../styles/breakpoints';
import {
  MarginContainer,
  YELLOW,
  BLUE,
  P,
  PointerStyles,
  H2,
} from '../../styles/styles';

export const Container = styled(MarginContainer)`
  display: grid;
  ${min.desktop} {
    grid-template-columns: 5fr 7fr;
    column-gap: 1rem;
  }
`;

export const InfoContainer = styled.div`
  ${min.desktop} {
    grid-column: 1 / 2;
  }
`;

export const ProjectName = styled(H2)`
  display: inline-block;
  margin-block: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${BLUE};
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${min.tablet} {
    flex-direction: row;
  }
  ${min.desktop} {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1 0 25%;
`;

export const Description = styled(P)`
  ${min.desktop} {
    width: 80%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  ${min.desktop} {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  ${min.desktop} {
    margin-top: 4rem;
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${min.desktop} {
    grid-column: 1 / 2;
  }
`;

export const Thumbnail = styled.img`
  height: 5rem;
  margin: 0 1rem 1rem 0;
  ${PointerStyles}
  &:hover {
    outline: 10px solid ${YELLOW};
    outline-offset: -10px;
  }
  ${min.tablet} {
    height: 7.125rem;
  }
  ${min.desktop} {
    height: 8.75rem;
  }
`;
