import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectPreview from '../components/ProjectPreview';
import { MarginContainer, H2 } from '../styles/styles';
import SingleWorks from '../components/SingleWorks';

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
      <Hero heading={mainHeading.text} blurb={blurb.text} />
      <MarginContainer>
        <H2>{blurb.text}</H2>
      </MarginContainer>
      {projects.map((project) => {
        return (
          <ProjectPreview
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
