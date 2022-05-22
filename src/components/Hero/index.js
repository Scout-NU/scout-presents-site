import React from 'react';
import { Container, Frame, MobileFrame, Image, LogoImage } from './styled';
import images from './images';
import Logo from '../../images/logos/logo-white.svg';

const Hero = () => {
  return (
    <Container>
      <Frame>
        <LogoImage alt="Presents" src={Logo} />
        {images.map((image) => {
          const { src, layer } = image;
          const baseProps = { key: src, src, alt: '', layer };
          return <Image {...baseProps} {...image.desktopProps} />;
        })}
      </Frame>
      <MobileFrame>
        <LogoImage alt="Presents" src={Logo} />
        {images.map((image) => {
          const { src, layer } = image;
          const baseProps = { key: src, src, alt: '', layer };
          return <Image mobile {...baseProps} {...image.mobileProps} />;
        })}
      </MobileFrame>
    </Container>
  );
};

export default Hero;
