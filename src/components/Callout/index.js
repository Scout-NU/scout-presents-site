import * as React from "react";
import { H3, H1, PrimaryButton, ButtonText, GREEN } from "../../styles/styles";
import { Container } from "./styled";

const CallOut = ({ label, header }) => (
  <>
    <Container>
      <H3>{header}</H3>
      <PrimaryButton color={GREEN}>
        <ButtonText>
          <H1>{label}</H1>
        </ButtonText>
      </PrimaryButton>
    </Container>
  </>
);

export default CallOut;
