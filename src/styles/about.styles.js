import styled from "styled-components";
import { min } from "./breakpoints";

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  ${min.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

//image is on the left in row form but then needs to be below in column form
export const ReverseSection = styled.div`
  flex-direction: column-reverse;
  ${min.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

export const AboutTitle = styled.div`
  width: 100%;

  ${min.tablet} {
    width: 62.5%;
  }
  ${min.desktop} {
    margin-left: 8.3%;
    width: 33%;
  }
`;

export const AboutImages = styled.div`
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

export const AboutDescription = styled.div`
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
