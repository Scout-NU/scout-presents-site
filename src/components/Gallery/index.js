import React, { useState } from 'react';
import { H1, StyledLink, H3 } from '../../styles/styles';
import {
  Container,
  InfoContainer,
  ProjectName,
  DetailsContainer,
  Details,
  Description,
  ImageContainer,
  Image,
  Thumbnails,
  Thumbnail,
} from './styled';
import ArrowControls from '../ArrowControls';

const Gallery = ({
  title,
  project,
  artistName,
  datePublished,
  description,
  images,
}) => {
  const [index, setIndex] = useState(0);
  const {
    uid,
    data: {
      name: { text: projectName },
    },
  } = project;

  return (
    <Container>
      <InfoContainer>
        <H1>{title}</H1>
        <StyledLink to={`/projects/${uid}`}>
          <ProjectName>{projectName}</ProjectName>
        </StyledLink>
        <DetailsContainer>
          <Details>
            <H3>{artistName}</H3>
            <H3>{datePublished}</H3>
          </Details>
          <Description>{description}</Description>
        </DetailsContainer>
      </InfoContainer>
      <ImageContainer>
        <Image src={images[index].image.url} alt={images[index].image.url} />
        <ArrowControls setIndex={setIndex} items={images} />
      </ImageContainer>
      <Thumbnails>
        {images.map((image, i) => (
          <Thumbnail
            key={i}
            src={image.image.url}
            alt={image.image.alt}
            onClick={() => setIndex(i)}
          />
        ))}
      </Thumbnails>
    </Container>
  );
};

export default Gallery;
