import * as React from "react";
import { H2, GREEN } from "../../styles/styles";
import { Container, LargeButton } from "./styled";
import Button from "../Button";

const CallOut = ({ label, header }) => (
  <>
    <Container>
      <H2>{header}</H2>
      <LargeButton>
        <Button to={`/submit`} color={GREEN}>
          {" "}
          {label}{" "}
        </Button>
      </LargeButton>
    </Container>
  </>
);

export default CallOut;
