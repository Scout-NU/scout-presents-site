import styled from 'styled-components';
import { min } from '../../styles/breakpoints';
import { MarginContainer, CREAM } from '../../styles/styles';

export const Container = styled.div`
  border-top: 0.5px solid ${CREAM};
  border-bottom: 0.5px solid ${CREAM};
`;

export const FlexContainer = styled(MarginContainer)`
  display: flex;
  flex-direction: column;
  ${min.desktop} {
    flex-direction: row;
  }
`;

export const Overview = styled.div`
  flex: 50%;
  padding: 3rem 0;
  ${min.desktop} {
    border-right: 0.25px solid ${CREAM};
    padding: 6rem 1rem 3rem 0;
  }
`;

export const Content = styled.div`
  flex: 50%;
  padding-bottom: 3rem;
  ${min.desktop} {
    border-left: 0.25px solid ${CREAM};
    padding: 10rem 0 3rem 1rem;
  }
`;
