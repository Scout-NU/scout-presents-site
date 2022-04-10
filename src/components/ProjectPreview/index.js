import React from 'react';
import { Link } from 'gatsby';
import { Container, FlexContainer, Overview, Content } from './styled';
import {
  H1,
  H2,
  P,
  PrimaryButton,
  ButtonText,
  YELLOW,
  SecondaryButton,
} from '../../styles/styles';

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
          <Link to={`/projects/${uid}`}>
            <PrimaryButton color={YELLOW}>
              <ButtonText bold>Watch</ButtonText>
            </PrimaryButton>
          </Link>
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
                <Link to={`/works/${uid}`}>
                  <SecondaryButton>Watch</SecondaryButton>
                </Link>
              </div>
            );
          })}
        </Content>
      </FlexContainer>
    </Container>
  );
};

export default ProjectPreview;
