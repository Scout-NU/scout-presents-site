import React from 'react';
import parse, { attributesToProps } from 'html-react-parser';
import { PrismicRichText } from '@prismicio/react';
import { H1, StyledLink } from '../../styles/styles';
import {
  Container,
  VideoContainer,
  IFrame,
  ProjectName,
  Separator,
  Date,
  Details,
  StyledP,
} from './styled';

const Video = ({ title, embed, details, project, datePublished }) => {
  const { html, upload_date: uploadDate } = embed;
  const {
    uid: projectId,
    data: {
      name: { text: projectName },
    },
  } = project;

  return (
    <Container>
      <VideoContainer>
        {parse(html, {
          // override default html output with custom responsive iframe
          replace: (html) => {
            if (html.attribs) {
              const { src, title, allow, allowFullScreen, frameBorder } =
                attributesToProps(html.attribs);
              return (
                <IFrame
                  src={src}
                  title={title}
                  allow={allow}
                  allowFullScreen={allowFullScreen}
                  frameBorder={frameBorder}
                />
              );
            }
          },
        })}
      </VideoContainer>
      <H1>{title}</H1>
      <StyledLink to={`/projects/${projectId}`}>
        <ProjectName>{projectName}</ProjectName>
      </StyledLink>
      <Separator> • </Separator>
      <Date>{datePublished || uploadDate}</Date>
      <Details>
        <PrismicRichText
          field={details}
          components={{
            paragraph: ({ children }) => <StyledP>{children}</StyledP>,
          }}
        />
      </Details>
    </Container>
  );
};

export default Video;
