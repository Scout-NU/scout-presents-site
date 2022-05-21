import React from 'react';
import {
  Container,
  FlexContainer,
  Overview,
  Content,
  SprinkleCollage,
} from './styled';
import { H1, P, YELLOW } from '../../styles/styles';
import Button from '../Button';
import ProjectCarousel from '../ProjectCarousel';
import Collage1 from '../../images/project-collage-1.png';
import Collage2 from '../../images/project-collage-2.png';
import Collage3 from '../../images/project-collage-3.png';

const sprinkles = [Collage1, Collage2, Collage3];

const ProjectPreview = ({ project, i }) => {
  const {
    data: { name, description, works },
    uid,
  } = project;

  return (
    <Container>
      <FlexContainer>
        <Overview>
          <H1>{name.text}</H1>
          <P>{description.text}</P>
          <Button to={`/projects/${uid}`} color={YELLOW}>
            View
          </Button>
        </Overview>
        <Content>
          <ProjectCarousel works={works} />
        </Content>
        <SprinkleCollage src={sprinkles[i % 3]} alt="" i={i % 3} />
      </FlexContainer>
    </Container>
  );
};

export default ProjectPreview;
