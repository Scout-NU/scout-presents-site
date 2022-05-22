import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectPreview from '../components/ProjectPreview';
import SingleWorks from '../components/SingleWorks';
import {
  BlurbContainer,
  Blurb,
  SprinkleTriangle,
  SprinkleSquiggle,
} from '../styles/index.styles';
import Triangle from '../images/sprinkles/Triangle.svg';
import Squiggle from '../images/sprinkles/Squiggle.svg';

const IndexPage = () => {
  const pageQuery = useStaticQuery(graphql`
    query MyQuery {
      prismicHomepage {
        data {
          main_heading {
            text
          }
          blurb {
            text
          }
          projects {
            project {
              document {
                ... on PrismicProject {
                  id
                  uid
                  data {
                    name {
                      text
                    }
                    description {
                      text
                    }
                    works {
                      content {
                        type
                        document {
                          ... on PrismicVideo {
                            uid
                            data {
                              title {
                                text
                              }
                              thumbnail {
                                alt
                                url
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
                                alt
                                url
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
                                alt
                                url
                              }
                            }
                          }
                        }
                      }
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
      data: { main_heading: mainHeading, blurb, projects },
    },
  } = pageQuery;

  return (
    <Layout>
      <title>Scout Presents</title>
      <Hero heading={mainHeading.text} blurb={blurb.text} />
      <BlurbContainer>
        <Blurb>{blurb.text}</Blurb>
        <SprinkleTriangle src={Triangle} alt="" />
        <SprinkleSquiggle src={Squiggle} alt="" />
      </BlurbContainer>
      {projects.map((project, i) => {
        return (
          <ProjectPreview
            i={i}
            key={project.project.document.uid}
            project={project.project.document}
          />
        );
      })}
      <SingleWorks />
    </Layout>
  );
};

export default IndexPage;
