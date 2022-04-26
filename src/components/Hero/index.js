import React from 'react';
import { Container, Frame, Image, LogoImage } from './styled';
import images from './images';
import useDimensions from '../../hooks/useDimensions';
import breakpoints from '../../styles/breakpoints';
import Logo from '../../images/logo.svg';

const Hero = () => {
  const { width } = useDimensions();
  const mobile = width < breakpoints.tablet;

  return (
    <Container>
      <Frame>
        <LogoImage alt="Presents" src={Logo} />
        {images.map((image) => {
          const props = mobile ? image.mobileProps : image.desktopProps;
          return (
            <Image
              key={image.src}
              src={image.src}
              alt=""
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
