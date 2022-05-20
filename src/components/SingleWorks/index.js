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
} from './styled';
import Button from '../Button';

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

  return (
    <Container>
      <H1>{singleWorksHeading.text}</H1>
      <SingleWorksDescription>
        {singleWorksDescription.text}
      </SingleWorksDescription>
      <Carousel
        responsive={responsive}
        infinite
        shouldResetAutoplay={false}
        customLeftArrow={<LeftIcon />}
        customRightArrow={<RightIcon />}>
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
            <Slide>
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
    </Container>
  );
};

export default SingleWorks;
