import * as React from "react";
import { Button, H1, H2 } from "../styles/styles";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 500,
};
const headingAccentStyles = {
  color: "#663399",
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
      <Button>click here</Button>
    </main>
  );
};

export default IndexPage;
