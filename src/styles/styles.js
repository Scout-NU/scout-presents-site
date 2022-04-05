import styled from 'styled-components';
import './styles.css';
import breakpoints from './breakpoints';

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

export const H1 = styled.h1`
  font-family: ${fonts.cubano};
  font-size: 3.25rem;
  line-height: 3.625rem;
  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 4.5rem;
    line-height: 4.875rem;
  }
`;

export const H2 = styled.h2`
  font-family: ${fonts.IBMPlexMono};
  font-weight: 700;
  font-size: 1.4375rem;
  line-height: 1.875rem;
  @media (min-width: ${breakpoints.tablet}px) {
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

export const PrimaryButton = styled.button`
  font-family: ${fonts.epilogue};
  padding: 0.5rem 1.5rem;
  transform: skew(15deg);
  color: ${(props) => (props.color === YELLOW ? BLACK : CREAM)};
  border-radius: 2px;
  border: 2px solid ${(props) => (props.color ? props.color : BLUE)};
  background-color: ${(props) => (props.color ? props.color : BLUE)};
  &:hover {
    background-color: transparent;
    color: ${(props) => (props.color ? props.color : BLUE)};
  }
`;

//offsets the skew from transforming the button
export const ButtonText = styled(H3)`
  transform: skew(-15deg);
  text-transform: lowercase;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const SecondaryButton = styled.button`
  font-family: ${fonts.epilogue};
  padding: 6px;
  color: ${CREAM};
  background-color: transparent;
  text-decoration: underline 2px
    ${(props) => (props.color ? props.color : BLUE)};
  border: 0px;
  &:hover {
    background-color: transparent;
    text-decoration: underline 4px
      ${(props) => (props.color ? props.color : BLUE)};
  }
`;

export const Container = styled.div`
  margin: 0 1.5rem;

  @media (min-width: ${breakpoints.tablet}px) {
    margin: 0 3rem;
  }
`;
