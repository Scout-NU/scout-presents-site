import styled from 'styled-components';
import { CREAM, MarginContainer, StyledLink } from '../../styles/styles';
import { min } from '../../styles/breakpoints';

export const StyledNav = styled.nav`
  padding: 2rem 0;
  overflow-x: hidden;
`;

export const Container = styled(MarginContainer)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  ${min.desktop} {
    justify-content: flex-start;
  }
`;

export const Links = styled.div`
  flex: 2;
  display: none;
  ${min.desktop} {
    display: flex;
  }
`;

export const InlineLink = styled(StyledLink)`
  ${min.desktop} {
    margin-right: 3rem;
  }
`;

export const SubmitContainer = styled.div`
  text-align: end;
  flex: 2;
`;

export const Hamburger = styled.button`
  align-self: center;
  border: 0;
  background-color: transparent;
  color: ${CREAM};

  ${min.desktop} {
    display: none;
  }
`;
