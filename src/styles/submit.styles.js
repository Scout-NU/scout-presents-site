import styled from "styled-components";
import { GREEN, BLUE, fonts } from "./styles";
import { min } from "./breakpoints";

export const GetInvolvedSection = styled.div`
  width: 33%;
  background-color: ${GREEN};
  padding: 2rem;
  transform: skew(-15deg);
`;

export const QuestionsSection = styled.div`
  width: 33%;
  background-color: ${BLUE};
  padding: 2rem;
  transform: skew(15deg);
`;

export const QuestionsText = styled.div`
  transform: skew(-15deg);
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  line-height: 1.375rem;
`;

export const GetInvolvedText = styled.div`
  transform: skew(15deg);
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  line-height: 1.375rem;
`;
