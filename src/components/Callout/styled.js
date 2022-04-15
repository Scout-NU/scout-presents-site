import styled from "styled-components";
import { PINK, BLACK } from "../../styles/styles";
import { min } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${PINK};
  text-align: center;
  white-space: nowrap;
  color: ${BLACK};
  padding-bottom: 5%;
`;

export const LargeButton = styled.div`
  text-align: center;
  margin: auto;
  white-space: nowrap;
  width: 100%;
  ${min.tablet} {
    width: 75%;
  }
  ${min.desktop} {
    width: 33.33%;
  }
`;
