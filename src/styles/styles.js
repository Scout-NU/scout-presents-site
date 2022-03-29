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

const fonts = {
  silkSerif: "Silk Serif",
  epilogue: "Epilogue",
  epilogueItalic: "Epilogue Italic",
};

export const H1 = styled.h1`
  font-family: ${fonts.silkSerif};
  text-transform: lowercase;
  font-size: 60px;
  font-style: semi-bold;
`;

export const H2 = styled.h2`
  font-family: ${fonts.epilogueItalic};
  font-size: 26px;
  font-style: bold-italic;
`;

export const P = styled.p`
  font-family: ${fonts.epilogue};
  font-size: 16px;
  font-style: regular;
`;

export const Button = styled.button`
  font-family: ${fonts.epilogue};
  padding: 6px;
  transform: skew(20deg);
  color: ${ROYAL_BLUE};
  border-radius: 4px;
  border: 2px solid ${ROYAL_BLUE};
  background-color: transparent;
  &:hover {
    background-color: ${ROYAL_BLUE};
    color: ${CREAM};
  }
`;
