import styled, { css } from 'styled-components';
import { P, PointerStyles, YELLOW, MarginContainer } from '../../styles/styles';
import { min } from '../../styles/breakpoints';
import { ArrowLeft, ArrowRight } from 'react-feather';

export const Container = styled(MarginContainer)`
  padding: 5rem 0 10rem 0;
  ${min.tablet} {
    padding: 6rem 0 11rem 0;
  }
  ${min.desktop} {
    padding: 3rem 0 17rem 0;
  }
`;

export const SingleWorksDescription = styled(P)`
  ${min.tablet} {
    width: 87.5%;
  }
  ${min.desktop} {
    width: 33.33%;
    margin-bottom: 11rem;
  }
`;

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1279, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  },
};

export const Slide = styled.div`
  margin: 0 1rem 2rem 0;
`;

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

const arrowStyles = css`
  ${PointerStyles}
  color: ${YELLOW};
  position: absolute;
  padding-top: 2rem;
  bottom: 0;
`;

export const LeftIcon = styled(ArrowLeft)`
  ${arrowStyles}
  left: 0;
`;

export const RightIcon = styled(ArrowRight)`
  ${arrowStyles}
  right: 1rem;
`;
