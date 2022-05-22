import styled from 'styled-components';
import { min } from './breakpoints';
import { fonts } from './styles';

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  ${min.desktop} {
    flex-direction: row;
  }
`;

//image is on the left in row form but then needs to be below in column form
export const ReverseSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 4rem;
  ${min.tablet} {
    padding-bottom: 6rem;
  }
  ${min.desktop} {
    flex-direction: row;
    padding-bottom: 8rem;
  }
`;

export const AboutTitle = styled.div`
  width: 100%;

  ${min.tablet} {
    width: 62.5%;
  }
  ${min.desktop} {
    margin-left: 8.3%;
    width: 33%;
  }
`;

export const AboutImages = styled.img`
  width: 100%;
  margin-bottom: 8.3%;
  aspect-ratio: 1;
  object-fit: cover;

  ${min.tablet} {
    margin-left: 25%;
    width: 75%;
  }
  ${min.desktop} {
    margin-top: -8.3%;
    margin-left: 14.67%;
    width: 41.67%;
  }
`;

export const WhoImages = styled.img`
  width: 100%;
  margin-bottom: 8.3%;
  aspect-ratio: 1;
  object-fit: cover;

  ${min.desktop} {
    margin-left: 8.3%;
    margin-top: -8.3%;
    width: 41.67%;
  }
`;

export const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${fonts.epilogue};
  font-size: 1rem;
  line-height: 1.375rem;

  ${min.tablet} {
    width: 75%;
  }
  ${min.desktop} {
    margin-left: 8.3%;
    width: 33.33%;
  }
`;
