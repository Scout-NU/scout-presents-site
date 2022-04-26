import React from 'react';
import { Container, Frame, Image, MobileImage, LogoImage } from './styled';
import images from './images';
import Logo from '../../images/logo.svg';

const Hero = () => {
  return (
    <Container>
      <Frame>
        <LogoImage alt="Presents" src={Logo} />
        {images.map((image) => {
          const { src, layer } = image;
          const baseProps = { key: src, src, alt: '', layer };
          return (
            <>
              <Image {...baseProps} {...image.desktopProps} />
              <MobileImage mobile {...baseProps} {...image.mobileProps} />
            </>
          );
        })}
      </Frame>
    </Container>
  );
};

export default Hero;
