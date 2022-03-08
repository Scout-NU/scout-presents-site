import React from "react";
import styled from "styled-components";
import "./styles.css";

// Colors
export const DARK_PURPLE = "#620052";
export const LIGHT_PURPLE = "#ECE5F0";
export const ORANGE = "#FFAE53";
export const LIME = "#CBDE57";
export const DARK_GREEN = "#032824";
export const WHITE = "#FFFAF2";

const fonts = {
  silkSerif: "Silk Serif",
  epilogue: "Epilogue",
  epilogueItalic: "Epilogue Italic",
};

export const H1 = styled.h1`
  font-family: ${fonts.silkSerif};
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
  color: ${DARK_PURPLE};
  border-radius: 7px;
  border: 1px solid ${DARK_PURPLE};
  background-color: transparent;
  &:hover {
    background-color: ${DARK_PURPLE};
    color: ${WHITE};
  }
`;
