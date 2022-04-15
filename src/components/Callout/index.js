import * as React from "react";
import { Link } from "gatsby";
import { H2, H1, PrimaryButton, ButtonText, GREEN } from "../../styles/styles";
import { Container, LargeButton } from "./styled";

const CallOut = ({ label, header }) => (
  <>
    <Container>
      <H2>{header}</H2>
      <LargeButton>
        <Link to={`/submit`}>
          <PrimaryButton color={GREEN}>
            <ButtonText>
              <H1>{label}</H1>
            </ButtonText>
          </PrimaryButton>
        </Link>
      </LargeButton>
    </Container>
  </>
);

export default CallOut;
