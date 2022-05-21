import styled from "styled-components";
import { BLACK, H3, CREAM, PINK } from "../../styles/styles";
import { min } from "../../styles/breakpoints";
import Cursor from "../../images/cursor-pointer.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const StyledLink = styled.div`
  white-space: nowrap;
  height: 3rem;
  width: 100%;
  transform: skew(15deg);
  background-color: transparent;
  cursor: url(${Cursor}) 20 20, pointer;
  border: 2px solid ${CREAM};
  text-align: center;
  &:hover {
    background-color: ${PINK};
    color: ${BLACK};
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
  color: ${CREAM};
  text-decoration: none;
`;

export const StyledAnchorLink = styled(AnchorLink)`
  text-decoration: none;
`;
