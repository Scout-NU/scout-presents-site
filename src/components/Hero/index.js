import React from 'react';
import { Container, Image, Title } from './styled';
import images from './images';

const Hero = ({ heading, blurb }) => (
  <Container>
    {/* <Display>{heading}</Display>
    <H2>{blurb}</H2> */}
    <Title>{heading}</Title>
    {images.map((image) => (
      <Image
        src={image.src}
        startPos={image.startPos}
        h={image.height}
        layer={image.layer}
      />
    ))}
  </Container>
);

export default Hero;
