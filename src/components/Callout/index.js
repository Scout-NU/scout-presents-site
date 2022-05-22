import * as React from 'react';
import { H2, GREEN } from '../../styles/styles';
import { Container, LargeButton, LeftSprinkle, RightSprinkle } from './styled';
import Button from '../Button';
import LeftCollage from '../../images/about-collage.png';
import RightCollage from '../../images/kicks.png';

const CallOut = ({ label, header }) => (
  <Container>
    <LeftSprinkle src={LeftCollage} alt="" />
    <RightSprinkle src={RightCollage} alt="" />
    <H2>{header}</H2>
    <LargeButton>
      <Button to={`/submit`} color={GREEN} jumbo>
        {label}
      </Button>
    </LargeButton>
  </Container>
);

export default CallOut;
