import React from 'react';
import { StyledButton, ButtonText, JumboText } from './styled';
import { BLUE, StyledLink } from '../../styles/styles';

const Button = ({ onClick, to, secondary, color = BLUE, jumbo, children }) => {
  const ButtonComponent = () => (
    <StyledButton onClick={onClick} secondary={secondary} color={color}>
      {jumbo ? (
        <JumboText>{children}</JumboText>
      ) : (
        <ButtonText secondary={secondary} bold>
          {children}
        </ButtonText>
      )}
    </StyledButton>
  );

  return to ? (
    <StyledLink to={to}>
      <ButtonComponent />
    </StyledLink>
  ) : (
    <ButtonComponent />
  );
};

export default Button;
