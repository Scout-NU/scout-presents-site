import styled from "styled-components";
import { min } from "../../styles/breakpoints";
import { MarginContainer, YELLOW } from "../../styles/styles";
import { ArrowLeft, ArrowRight } from "react-feather";

export const FlexContainer = styled(MarginContainer)`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding-bottom: 7rem;
`;

export const Work = styled.div`
  padding-right: 1rem;
  padding-bottom: 5rem;
`;

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

export const LeftIcon = styled(ArrowLeft)`
  color: ${YELLOW};
  position: absolute;
  width: 45px;
  height: 45px;
  margin-top: 22rem;
`;

export const RightIcon = styled(ArrowRight)`
  color: ${YELLOW};
  position: absolute;
  margin-left: 90%;
  width: 45px;
  height: 45px;
  margin-top: 22rem;
`;
