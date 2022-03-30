import React from 'react';
import { Link } from 'gatsby';
import { Container, Overview, Content } from './styled';

const ProjectPreview = ({ project }) => {
  const {
    data: { name, description, works },
    uid,
  } = project;

  return (
    <Container>
      <Overview>
        <h1>{name.text}</h1>
        <p>{description.text}</p>
        <Link to={`/projects/${uid}`}>Watch</Link>
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
              <img src={thumbnail_url} />
              <h2>{title.text}</h2>
              <Link to={`/works/${uid}`}>Watch</Link>
            </div>
          );
        })}
      </Content>
    </Container>
  );
};

export default ProjectPreview;
