import styled from 'styled-components';
import './styles.css';
import { min } from './breakpoints';
import { Link } from 'gatsby';

// Colors
export const YELLOW = '#ECF955';
export const GREEN = '#058855';
export const PINK = '#E8A8CA';
export const RED = '#DF4E20';
export const BLUE = '#3C60DD';
export const BLACK = '#170E07';
export const CREAM = '#FFFAF2';

export const fonts = {
  cubano: 'Cubano',
  epilogue: 'Epilogue',
  IBMPlexMono: 'IBM Plex Mono',
};

export const Display = styled.h1`
  font-family: ${fonts.cubano};
  font-size: 4rem;
  line-height: 2.5rem;
  margin-block: 0;
  ${min.tablet} {
    font-size: 7.5rem;
    line-height: 4.75rem;
  }
  ${min.desktop} {
    font-size: 8.5rem;
    line-height: 7.5rem;
  }
`;

export const H1 = styled.h1`
  font-family: ${fonts.cubano};
  font-size: 3.25rem;
  line-height: 3.625rem;
  ${min.tablet} {
    font-size: 4.5rem;
    line-height: 4.875rem;
  }
`;

export const H2 = styled.h2`
  font-family: ${fonts.IBMPlexMono};
  font-weight: 700;
  font-size: 1.4375rem;
  line-height: 1.875rem;
  ${min.tablet} {
    font-size: 1.875rem;
    line-height: 2.125rem;
  }
`;

export const H3 = styled.h3`
  font-family: ${fonts.IBMPlexMono};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  font-size: 1.125rem;
  line-height: 1.375rem;
`;

export const P = styled.p`
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  line-height: 1.375rem;
`;

export const MarginContainer = styled.div`
  margin: 0 1.5rem;

  ${min.tablet} {
    margin: 0 3rem;
  }

  ${min.desktopLg} {
    max-width: 1344px;
    margin: auto;
  }
`;

const linkStyles = `
  text-decoration: none;
  color: inherit;
`;

export const A = styled.a`
  ${linkStyles}
`;

export const StyledLink = styled(Link)`
  ${linkStyles}
`;
