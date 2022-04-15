import React from 'react';
import { Container, FlexContainer, Overview, Content } from './styled';
import { H1, H2, P, YELLOW } from '../../styles/styles';
import Button from '../Button';

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
            Watch
          </Button>
        </Overview>
        <Content>
          {works.map((work) => {
            const {
              content: {
                document: {
                  uid,
                  data: {
                    title,
                    embed: { thumbnail_url },
                  },
                },
              },
            } = work;
            return (
              <div>
                <img alt={title.text} src={thumbnail_url} />
                <H2>{title.text}</H2>
                <Button to={`/works/${uid}`} secondary>
                  Watch
                </Button>
              </div>
            );
          })}
        </Content>
      </FlexContainer>
    </Container>
  );
};

export default ProjectPreview;
