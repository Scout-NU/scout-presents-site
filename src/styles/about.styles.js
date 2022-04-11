import styled from "styled-components";
import { P } from "./styles";
import { min, tablet } from "./breakpoints";

export const Section = styled(P)`
  display: flex;
  flex-direction: column;

  ${min.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

//image is on the left in row form but then needs to be below in column form
export const ReverseSection = styled(Section)`
  flex-direction: column-reverse;
  ${min.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

export const AboutTitle = styled(P)`
  width: 100%;

  ${min.tablet} {
    width: 62.5%;
  }
  ${min.desktop} {
    margin-left: 8.3%;
    width: 33%;
  }
`;

export const AboutImages = styled(P)`
  width: 100%;
  ${min.tablet} {
    margin-left: 16.66%;
    width: 75%;
  }
  ${min.desktop} {
    margin-left: 8.3%;
    margin-right: 8.3%;
    width: 33%;
  }
`;

export const AboutDescription = styled(P)`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${min.tablet} {
    width: 75%;
  }
  ${min.desktop} {
    width: 33.33%;
    margin-left: 8.3%;
    margin-right: 8.3%;
  }
`;
