import styled from "styled-components";
import "./styles.css";

// Colors
export const YELLOW = "#ECF955";
export const GREEN = "#058855";
export const PINK = "#E8A8CA";
export const RED = "#DF4E20";
export const BLUE = "#3C60DD";
export const BLACK = "#170E07";
export const CREAM = "#FFFAF2";

export const fonts = {
  cubano: "Cubano",
  epilogue: "Epilogue",
  IBMPlexMono: "IBM Plex Mono",
};

export const H1 = styled.h1`
  font-family: ${fonts.cubano};
  text-transform: lowercase;
  font-size: 4.5rem;
  line-height: 4.875rem;
  font-style: semi-bold;
`;

export const H2 = styled.h2`
  font-family: ${fonts.epilogue};
  font-size: 3.2rem;
  font-style: normal;
`;

export const H3 = styled.h2`
  font-family: ${fonts.epilogue};
  font-size: 3.2rem;
  font-style: bold;
`;

export const P = styled.p`
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  font-style: normal;
`;

export const PrimaryButton = styled.button`
  font-family: ${fonts.epilogue};
  padding-left: 5px;
  padding-right: 5px;
  transform: skew(15deg);
  color: ${CREAM};
  border-radius: 2px;
  border: 2px solid ${(props) => (props.color ? props.color : BLUE)};
  background-color: ${(props) => (props.color ? props.color : BLUE)};
  &:hover {
    background-color: transparent;
    color: ${(props) => (props.color ? props.color : BLUE)};
  }
`;

//offsets the skew from transforming the button
export const ButtonText = styled.p`
  transform: skew(-15deg);
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
