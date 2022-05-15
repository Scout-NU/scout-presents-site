import styled from 'styled-components';
import { P } from '../../styles/styles';
import { min } from '../../styles/breakpoints';

export const FlexContainer = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  ${min.desktop} {
    flex-direction: row;
  }
`;

export const Thumbnail = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 100%;
  ${min.desktop} {
    width: 58%;
    margin-right: 1rem;
  }
`;

export const Details = styled.div`
  ${min.tablet} {
    width: 75%;
  }
  ${min.desktop} {
    width: 42%;
  }
`;

export const Description = styled(P)`
  ${min.desktop} {
    width: 80%;
  }
`;
