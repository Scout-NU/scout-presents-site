import * as React from "react";
import {
  PrimaryButton,
  H1,
  H2,
  BLUE,
  GREEN,
  YELLOW,
  BLACK,
  SecondaryButton,
  ButtonText,
} from "../styles/styles";

// styles
const pageStyles = {
  color: BLUE,
  backgroundColor: BLACK,
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 500,
};
const headingAccentStyles = {
  color: YELLOW,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <H1 style={headingStyles}>
        Hello, Scout Presents Team!!
        <br />
        <H2 style={headingAccentStyles}>We have a site! </H2>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </H1>
      <PrimaryButton color={GREEN}>
        <ButtonText>submit work</ButtonText>
      </PrimaryButton>
      <SecondaryButton color={YELLOW}>submit work</SecondaryButton>
    </main>
  );
};

export default IndexPage;
