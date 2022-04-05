import React from 'react';
import { Container, Title, Blurb, Image } from './styled';
import images from './images';

const Hero = ({ heading, blurb }) => (
  <Container>
    <Title>{heading}</Title>
    {/* <Blurb>{blurb}</Blurb> */}
    {images.map((image) => (
      <Image
        src={image.src}
        startPos={image.startPos}
        dimensions={image.dimensions}
        h={image.dimensions[1]}
        layer={image.layer}
      />
    ))}
  </Container>
);

export default Hero;
