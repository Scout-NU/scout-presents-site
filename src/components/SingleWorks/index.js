import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { H1 } from '../../styles/styles';
import {
  Container,
  SingleWorksDescription,
  responsive,
  Thumbnail,
  Slide,
  LeftIcon,
  RightIcon,
  TopCollage,
  BottomCollage,
  OverflowContainer,
} from './styled';
import Button from '../Button';
import SingleWorksTopCollage from '../../images/page-sprinkles/single-works-collage.png';
import SingleWorksBottomCollage from '../../images/page-sprinkles/single-works-bottom-collage.png';

const SingleWorks = () => {
  const query = useStaticQuery(graphql`
    query SingleWorksQuery {
      prismicHomepage {
        data {
          single_works_heading {
            text
          }
          single_works_description {
            text
          }
          works {
            work {
              uid
              document {
                ... on PrismicVideo {
                  data {
                    thumbnail {
                      url
                      alt
                    }
                    title {
                      text
                    }
                  }
                }
                ... on PrismicArticle {
                  data {
                    thumbnail {
                      url
                      alt
                    }
                    title {
                      text
                    }
                  }
                }
                ... on PrismicGallery {
                  data {
                    thumbnail {
                      url
                      alt
                    }
                    title {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const {
    prismicHomepage: {
      data: {
        single_works_heading: singleWorksHeading,
        single_works_description: singleWorksDescription,
        works,
      },
    },
  } = query;

  const CustomLeftArrow = ({ onClick }) => <LeftIcon onClick={onClick} />;
  const CustomRightArrow = ({ onClick }) => <RightIcon onClick={onClick} />;

  return (
    <OverflowContainer>
      <Container>
        <H1>{singleWorksHeading.text}</H1>
        <SingleWorksDescription>
          {singleWorksDescription.text}
        </SingleWorksDescription>
        <Carousel
          responsive={responsive}
          infinite
          shouldResetAutoplay={false}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}>
          {works.map((work) => {
            const {
              uid,
              document: {
                data: {
                  thumbnail: { url, alt },
                  title: { text: title },
                },
              },
            } = work.work;
            return (
              <Slide key={uid}>
                <Link to={`/works/${uid}`}>
                  <Thumbnail src={url} alt={alt} />
                </Link>
                <Button secondary to={`/works/${uid}`}>
                  {title}
                </Button>
              </Slide>
            );
          })}
        </Carousel>
        <TopCollage src={SingleWorksTopCollage} alt="" />
        <BottomCollage src={SingleWorksBottomCollage} alt="" />
      </Container>
    </OverflowContainer>
  );
};

export default SingleWorks;
