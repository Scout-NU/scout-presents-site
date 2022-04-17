import styled from 'styled-components';
import { P } from './styles';
import { min } from './breakpoints';

export const SingleWorksDescription = styled(P)`
  ${min.tablet} {
    width: 87.5%;
  }
  ${min.desktop} {
    width: 33.33%;
  }
`;
