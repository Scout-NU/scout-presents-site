import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectPreview from '../components/ProjectPreview';
import { MarginContainer, H1, YELLOW } from '../styles/styles';
import {
  BlurbContainer,
  Blurb,
  SingleWorksDescription,
  SprinkleTriangle,
  SprinkleSquiggle,
} from '../styles/index.styles';
import Button from '../components/Button';
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
          single_works_heading {
            text
          }
          single_works_description {
            text
          }
        }
      }
    }
  `);

  const {
    prismicHomepage: {
      data: {
        main_heading: mainHeading,
        blurb,
        projects,
        single_works_heading: singleWorksHeading,
        single_works_description: singleWorksDescription,
      },
    },
  } = pageQuery;

  return (
    <Layout>
      <Hero heading={mainHeading.text} blurb={blurb.text} />
      <BlurbContainer>
        <Blurb>{blurb.text}</Blurb>
        <SprinkleTriangle src={Triangle} alt="" />
        <SprinkleSquiggle src={Squiggle} alt="" />
      </BlurbContainer>
      {projects.map((project) => {
        return (
          <ProjectPreview
            key={project.project.document.uid}
            project={project.project.document}
          />
        );
      })}
      <MarginContainer>
        <H1>{singleWorksHeading.text}</H1>
        <SingleWorksDescription>
          {singleWorksDescription.text}
        </SingleWorksDescription>
        <Button color={YELLOW}>Watch</Button>
      </MarginContainer>
    </Layout>
  );
};

export default IndexPage;
