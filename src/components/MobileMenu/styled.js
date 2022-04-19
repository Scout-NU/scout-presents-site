import styled from 'styled-components';
import { Link } from 'gatsby';
import { GREEN, CREAM, H2 } from '../../styles/styles';
import { min } from '../../styles/breakpoints';

export const Container = styled.div`
  position: fixed;
  transition: right 0.3s ease;
  right: ${(props) => (props.open ? '0' : '-100%')};
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${GREEN};
  z-index: 100;
  ${min.tablet} {
    width: 40%;
  }
  ${min.desktop} {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
`;

export const CloseButton = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  color: ${CREAM};
`;

export const StyledLink = styled(Link)`
  color: ${CREAM};
  text-decoration: none;
`;

export const StyledH2 = styled(H2)`
  margin-block: 0.5rem;
`;
