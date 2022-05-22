import React from "react";
import {
  LeftLink,
  LinkText,
  LinkContainer,
  CenterLink,
  RightLink,
  StyledAnchorLink,
  Bar,
} from "./styled";

const ExploreNav = () => {
  return (
    <Bar>
      <LinkContainer>
        <LeftLink>
          <StyledAnchorLink to="/explore#watch">
            <LinkText>watch</LinkText>
          </StyledAnchorLink>
        </LeftLink>
        <CenterLink>
          <StyledAnchorLink to="/explore#read" title="read">
            <LinkText>read</LinkText>
          </StyledAnchorLink>
        </CenterLink>
        <RightLink>
          <StyledAnchorLink to="/explore#view" title="view">
            <LinkText>view</LinkText>
          </StyledAnchorLink>
        </RightLink>
      </LinkContainer>
    </Bar>
  );
};

export default ExploreNav;
