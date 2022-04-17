import React from 'react';
import { Container, Frame, Title, Image } from './styled';
import images from './images';
import useDimensions from '../../hooks/useDimensions';
import breakpoints from '../../styles/breakpoints';

const Hero = ({ heading }) => {
  const { width } = useDimensions();
  const mobile = width < breakpoints.tablet;

  return (
    <Container>
      <Frame>
        <Title>{heading}</Title>
        {images.map((image) => {
          const props = mobile ? image.mobileProps : image.desktopProps;
          return (
            <Image
              key={image.src}
              src={image.src}
              layer={image.layer}
              mobile={mobile}
              {...props}
            />
          );
        })}
      </Frame>
    </Container>
  );
};

export default Hero;
