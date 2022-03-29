import React from "react";
import styled from "styled-components";
import "./styles.css";

// Colors
export const YELLOW = "#ECF955";
export const GREEN = "#058855";
export const PINK = "#E8A8CA";
export const RED = "#DF4E20";
export const ROYAL_BLUE = "#3C60DD";
export const LIGHT_BLUE = "#13BCD7";
export const BLACK = "#170E07";
export const CREAM = "#FFFAF2";

export const fonts = {
  cubano: "Cubano",
  epilogue: "Epilogue",
  epilogueItalic: "Epilogue Italic",
  IBMPlexMono: "IBM Plex Mono",
};

export const H1 = styled.h1`
  font-family: ${fonts.cubano};
  text-transform: lowercase;
  font-size: 60px;
  font-style: semi-bold;
  color: {
  }
`;

export const H2 = styled.h2`
  font-family: ${fonts.epilogue};
  font-size: 26px;
  font-style: bold-italic;
`;

export const P = styled.p`
  font-family: ${fonts.epilogue};
  font-size: 16px;
  font-style: regular;
`;

export const PrimaryButton = styled.button`
  font-family: ${fonts.epilogue};
  paddingleft: 3px;
  paddingright: 3px;
  transform: skew(15deg);
  color: ${CREAM};
  border-radius: 2px;
  border: 2px solid ${ROYAL_BLUE};
  background-color: ${ROYAL_BLUE};
  &:hover {
    background-color: transparent;
    color: ${ROYAL_BLUE};
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
  text-decoration: underline 2px ${ROYAL_BLUE};
  border: 0px;
  &:hover {
    background-color: transparent;
    text-decoration: underline 4px ${ROYAL_BLUE};
  }
`;
