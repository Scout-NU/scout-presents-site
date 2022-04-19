import styled from 'styled-components';
import { Link } from 'gatsby';
import { CREAM, MarginContainer } from '../../styles/styles';
import { min } from '../../styles/breakpoints';

export const StyledNav = styled.nav`
  padding: 2rem 0;
  overflow-x: hidden;
`;

export const Container = styled(MarginContainer)`
  display: flex;
  align-items: baseline;
`;

export const Links = styled.div`
  flex: 2;
  display: none;
  ${min.desktop} {
    display: flex;
  }
`;

export const InlineLink = styled(Link)`
  ${min.desktop} {
    margin-right: 3rem;
  }
`;

export const SubmitContainer = styled.div`
  text-align: end;
  flex: 2;
`;

export const Hamburger = styled.button`
  flex: 2;
  align-self: center;
  display: flex;
  justify-content: end;
  border: 0;
  background-color: transparent;
  color: ${CREAM};

  ${min.desktop} {
    display: none;
  }
`;
