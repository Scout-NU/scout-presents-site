import styled from "styled-components";
import { GREEN, CREAM, BLUE, BLACK, fonts } from "./styles";
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
  width: 100%;
  ${min.desktop} {
    width: 33%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${min.tablet} {
    margin-left: 12.5%;
    width: 75%;
  }
  ${min.desktop} {
    margin-left: 8.33%;
    width: 50%;
  }
`;

export const Input = styled.input`
  background: ${BLACK};
  border: solid ${CREAM};
  color: ${CREAM};
  padding: 1rem;
  padding-right: 0rem;
  font-family: ${fonts.IBMPlexMono};
  font-size: 1.125rem;
  line-height: 1.375rem;
  margin-bottom: 1rem;
  width: 100%;
  outline: none;
`;

export const UploadFile = styled.input`
  content: "Select some files";
`;

export const TextArea = styled.textarea`
  background: ${BLACK};
  border: solid ${CREAM};
  color: ${CREAM};
  padding: 1rem;
  padding-right: 0rem;
  font-family: ${fonts.IBMPlexMono};
  font-size: 1.125rem;
  line-height: 1.375rem;
  margin-bottom: 1rem;
  width: 100%;
  outline: none;
  height: 8rem;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  ${min.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const GetInvolvedSection = styled.div`
  background-color: ${GREEN};
  transform: skew(-10deg);
  border-radius: 2px;
  margin-top: 2rem;
  width: 80%;
  margin-left: 5%;
  ${min.tablet} {
    width: 75%;
    margin-left: 0%;
  }
  ${min.desktop} {
    width: 75%;
    margin-left: 12.5%;
  }
`;

export const QuestionsSection = styled.div`
  background-color: ${BLUE};
  transform: skew(10deg);
  border-radius: 2px;
  margin-top: 2rem;

  ${min.tablet} {
    margin-left: 50%;
  }
  ${min.desktop} {
    margin-left: 25%;
  }
`;

export const QuestionsText = styled.div`
  transform: skew(-10deg);
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  line-height: 1.375rem;
  padding: 1rem 3rem 1rem 2rem;
`;

export const GetInvolvedText = styled.div`
  transform: skew(10deg);
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  line-height: 1.375rem;
  padding: 1rem 3rem 1rem 3rem;
`;

export const SubmitDescription = styled.div`
  width: 100%;
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  line-height: 1.375rem;

  ${min.desktop} {
    width: 75%;
  }
`;
