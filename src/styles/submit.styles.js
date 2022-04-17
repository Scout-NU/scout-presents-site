import styled from "styled-components";
import { GREEN, BLUE, fonts } from "./styles";
import { min } from "./breakpoints";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${min.desktop} {
    flex-direction: row;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${min.desktop} {
    width: 33%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${min.desktop} {
    margin-left: 8.33%;
    width: 50%;
  }
`;

export const GetInvolvedSection = styled.div`
  background-color: ${GREEN};
  transform: skew(-15deg);
`;

export const QuestionsSection = styled.div`
  background-color: ${BLUE};
  transform: skew(15deg);
`;

export const QuestionsText = styled.div`
  transform: skew(-15deg);
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  line-height: 1.375rem;
  padding: 1rem 3rem 1rem 2rem;
`;

export const GetInvolvedText = styled.div`
  transform: skew(15deg);
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  line-height: 1.375rem;
  padding: 1rem 2rem 1rem 3rem;
`;
