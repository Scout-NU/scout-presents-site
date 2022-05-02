import styled from "styled-components";
import { GREEN, P, H3, CREAM, BLUE, YELLOW, BLACK, fonts } from "./styles";
import { min } from "./breakpoints";
import Cursor from "../images/cursor-pointer.svg";
import { ArrowUpCircle } from "react-feather";

export const HeaderImage = styled.img`
  width: 100%;
`;

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
  type: text;
  background: ${BLACK};
  border: solid ${CREAM};
  color: ${CREAM};
  padding: 4%;
  font-family: ${fonts.IBMPlexMono};
  font-size: 1.125rem;
  line-height: 1.375rem;
  margin-bottom: 1rem;
  width: 92%;
  outline: none;
`;

export const TextArea = styled.textarea`
  type: text;
  background: ${BLACK};
  border: solid ${CREAM};
  color: ${CREAM};
  padding: 4%;
  font-family: ${fonts.IBMPlexMono};
  font-size: 1.125rem;
  line-height: 1.375rem;
  margin-bottom: 1rem;
  width: 92%;
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
  transform: skew(-5deg);
  border-radius: 2px;
  margin-top: 2rem;
  width: 90%;
  margin-left: 1rem;
  ${min.tablet} {
    transform: skew(-10deg);
    width: 75%;
    margin-left: 0%;
  }
  ${min.desktop} {
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

export const QuestionsText = styled(P)`
  transform: skew(-10deg);
  padding: 1rem 3rem 1rem 2rem;
`;

export const GetInvolvedText = styled(P)`
  transform: skew(5deg);
  padding: 1rem 3rem 1rem 3rem;
  ${min.tablet} {
    transform: skew(10deg);
  }
`;

export const SubmitDescription = styled.div`
  width: 100%;
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  line-height: 1.375rem;
  ${min.tablet} {
    width: 65%;
  }
`;

export const HiddenInput = styled.input`
  type: file;
  display: none;
`;

export const UploadButton = styled.label`
  white-space: nowrap;
  height: 2rem;
  padding: 0rem 1.5rem;
  transform: skew(15deg);
  color: ${CREAM};
  background-color: transparent;
  cursor: url(${Cursor}), pointer;
  border-radius: 2px;
  border: 2px solid ${YELLOW};
  margin-left: 0.5rem;
  margin-right: 1rem;
  text-align: center;
  margin-top: 1rem;
  ${min.tablet} {
    width: 25%;
  }
`;

export const UploadButtonText = styled(H3)`
  margin: 0.3rem 0rem;
  transform: skew(-15deg);
`;

export const UploadIcon = styled(ArrowUpCircle)`
  color: ${CREAM};
  vertical-align: middle;
  padding-right: 0.2rem;
  margin-bottom: 0.2rem;
`;

export const PaddedInput = styled(Input)`
  ${min.tablet} {
    width: 40%;
  }
`;

export const SubmitContainer = styled.div`
  float: right;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
`;
