import styled from "styled-components";
import { BLUE, MarginContainer, P, H2, H3 } from "../../styles/styles";
import { min } from "../../styles/breakpoints";

export const ArticleContainer = styled.div`
  width: 100%;
  ${min.desktop} {
    width: 66.66%;
    margin-left: 16.66%;
  }
`;

export const Section = styled.div`
  margin-bottom: 3rem;
`;

export const StyledP = styled(P)`
  display: inline-block;
  width: 100%;
  margin-block: 0;
`;
