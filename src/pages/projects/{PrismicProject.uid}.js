import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import { MarginContainer, H1, H2 } from '../../styles/styles';
import {
  Description,
  Cover,
  WorksContainer,
  FlexContainer,
  Slide,
  SlidePreview,
  ControlsContainer,
} from '../../styles/project.styles';
import ArrowControls, { mod } from '../../components/ArrowControls';

const ProjectPage = ({ data }) => {
  const [index, setIndex] = useState(0);

  if (!data) return null;

  const {
    prismicProject: {
      data: {
        name: { text: name },
        description: { text: description },
        works,
      },
    },
  } = data;

  return (
    <Layout>
      <MarginContainer>
        <H1>{name}</H1>
        <Description>{description}</Description>
      </MarginContainer>
      <WorksContainer>
        <MarginContainer>
          <FlexContainer>
            {works.map((work, i) => {
              const slidePosition = (i) =>
                i === index
                  ? 'current'
                  : i === mod(index + 1, works.length)
                  ? 'next'
                  : mod(index - 1, works.length)
                  ? 'prev'
                  : null;

              const {
                content: {
                  document: {
                    uid,
                    data: {
                      title: { text: title },
                      thumbnail: { url: thumbnailUrl, alt },
                    },
                  },
                },
              } = work;

              return slidePosition(i) === 'current' ||
                slidePosition(i) === 'next' ? (
                <Slide key={i} position={slidePosition(i)}>
                  <H2>{title}</H2>
                  <Link to={`/works/${uid}`} key={uid}>
                    <Cover hover src={thumbnailUrl} alt={alt} />
                  </Link>
                </Slide>
              ) : (
                <SlidePreview key={i} position={slidePosition(i)}>
                  <Cover src={thumbnailUrl} alt={alt} />
                </SlidePreview>
              );
            })}
          </FlexContainer>
          <ControlsContainer>
            <ArrowControls setIndex={setIndex} items={works} />
          </ControlsContainer>
        </MarginContainer>
      </WorksContainer>
    </Layout>
  );
};

export const query = graphql`
  query ProjectPageQuery($uid: String) {
    prismicProject(uid: { eq: $uid }) {
      data {
        name {
          text
        }
        description {
          text
        }
        works {
          content {
            document {
              ... on PrismicVideo {
                uid
                data {
                  title {
                    text
                  }
                  thumbnail {
                    url
                    alt
                  }
                }
              }
              ... on PrismicArticle {
                uid
                data {
                  title {
                    text
                  }
                  thumbnail {
                    url
                    alt
                  }
                }
              }
              ... on PrismicGallery {
                uid
                data {
                  title {
                    text
                  }
                  thumbnail {
                    url
                    alt
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectPage;
