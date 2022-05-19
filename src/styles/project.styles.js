import styled, { css } from 'styled-components';
import { CREAM, P, YELLOW } from './styles';
import { min } from './breakpoints';

export const Description = styled(P)`
  margin-bottom: 3rem;
  ${min.tablet} {
    width: 87.5%;
  }
  ${min.desktop} {
    width: 50%;
  }
`;

export const WorksContainer = styled.div`
  border-top: 0.5px solid ${CREAM};
  padding-top: 2rem;
  overflow-x: hidden;
`;

export const Cover = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  ${(props) =>
    props.hover &&
    `&:hover {
      outline: 10px solid ${YELLOW};
      outline-offset: -10px;
    }`}
`;

const baseSlideStyles = css`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
  margin-left: 1rem;
  ${min.tablet} {
    flex-basis: 37.5%;
  }
  ${min.desktop} {
    flex-basis: 16%;
    margin-bottom: 9%;
  }
`;

const currentSlideStyles = css`
  order: 1;
  flex-basis: 66%;
  margin-left: 0;
  ${min.tablet} {
    flex-basis: 62.5%;
  }
  ${min.desktop} {
    flex-basis: 50%;
    margin-bottom: 0;
  }
`;

const nextSlideStyles = css`
  order: 2;
  flex-basis: 50%;
  ${min.tablet} {
    flex-basis: 37.5%;
  }
  ${min.desktop} {
    flex-basis: 25%;
    margin-left: 8.3%;
    margin-bottom: 0;
  }
`;

const prevSlideStyles = css`
  order: 4;
`;

export const Slide = styled.div`
  ${baseSlideStyles}
  ${(props) =>
    props.position === 'current'
      ? currentSlideStyles
      : props.position === 'next'
      ? nextSlideStyles
      : ''}
`;

export const SlidePreview = styled.div`
  ${baseSlideStyles}
  order: 3;
  ${(props) => props.position === 'prev' && prevSlideStyles}
`;

export const ControlsContainer = styled.div`
  ${min.desktop} {
    width: 50%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: end;
  flex-wrap: nowrap;
  overflow-x: visible;
`;
