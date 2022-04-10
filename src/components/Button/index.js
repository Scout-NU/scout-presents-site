import React from 'react';
import { StyledLink, StyledButton, ButtonText } from './styled';
import { BLUE } from '../../styles/styles';

const Button = ({ onClick, to, secondary, color = BLUE, children }) => {
  const ButtonComponent = () => (
    <StyledButton onClick={onClick} secondary={secondary} color={color}>
      <ButtonText secondary={secondary} bold>
        {children}
      </ButtonText>
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
