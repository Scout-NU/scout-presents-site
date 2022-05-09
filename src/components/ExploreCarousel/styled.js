import styled from "styled-components";
import { min } from "../../styles/breakpoints";
import { MarginContainer, P, YELLOW } from "../../styles/styles";
import { ArrowLeft, ArrowRight } from "react-feather";
import Cursor from "../../images/cursor-pointer.svg";

export const FlexContainer = styled(MarginContainer)`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 200px;
  padding-top: 1rem;
`;

export const Work = styled.div`
  padding-right: 1rem;
`;

export const StyledP = styled(P)`
  display: inline-block;
  width: 100%;
  margin-block: 0;
`;

export const responsiveWatch = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1297, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  },
};

export const responsiveRead = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1297, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export const LeftIcon = styled(ArrowLeft)`
  color: ${YELLOW};
  position: absolute;
  width: 45px;
  height: 45px;
  margin-top: 25rem;
  cursor: url(${Cursor}) 20 20, pointer;
  ${min.tablet} {
    margin-top: 30rem;
  }
  ${min.desktop} {
    margin-left: 90%;
  }
`;

export const RightIcon = styled(ArrowRight)`
  color: ${YELLOW};
  position: absolute;
  margin-left: 90%;
  width: 45px;
  height: 45px;
  margin-top: 25rem;
  cursor: url(${Cursor}) 20 20, pointer;
  ${min.tablet} {
    margin-top: 30rem;
  }
  ${min.desktop} {
    margin-left: 95%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledArticleImage = styled.img`
  width: 100%;
  margin-top: 1rem;
  margin-right: 0px;
`;

export const ItemContainer = styled.div`
  padding-bottom: 8rem;
  height: 90%;
`;
