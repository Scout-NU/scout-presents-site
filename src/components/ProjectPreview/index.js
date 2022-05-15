import React from 'react';
import { Container, FlexContainer, Overview, Content } from './styled';
import { H1, P, YELLOW } from '../../styles/styles';
import Button from '../Button';
import ProjectCarousel from '../ProjectCarousel';

const ProjectPreview = ({ project }) => {
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
      </FlexContainer>
    </Container>
  );
};

export default ProjectPreview;
