import styled from "styled-components";
import { BLACK, H3, CREAM, PINK, PointerStyles } from "../../styles/styles";
import { min } from "../../styles/breakpoints";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const StyledLink = styled.div`
  white-space: nowrap;
  height: 3rem;
  width: 100%;
  transform: skew(15deg);
  background-color: transparent;
  ${PointerStyles}
  border: 2px solid ${CREAM};
  text-align: center;
  &:hover {
    background-color: ${PINK};
  }
`;

export const LeftLink = styled(StyledLink)`
  border-right: none;
`;

export const CenterLink = styled(StyledLink)`
  border-right: none;
  border-left: none;
`;

export const RightLink = styled(StyledLink)`
  border-left: none;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  z-index: 1;
  margin-left: 5%;
  width: 90%;
  ${min.tablet} {
    margin-left: 25%;
    width: 50%;
  }
  ${min.desktop} {
    width: 33.33%;
    margin-left: 33.33%;
  }
`;

export const LinkText = styled(H3)`
  margin: 0.6rem 0;
  transform: skew(-15deg);
  height: 100%;
  width: 100%;
  color: ${CREAM};
  &:hover {
    color: ${BLACK};
  }
`;

export const StyledAnchorLink = styled(AnchorLink)`
  text-decoration: none;
  height: 100%;
  width: 100%;
`;
