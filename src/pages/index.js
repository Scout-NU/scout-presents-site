import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import ProjectPreview from '../components/ProjectPreview';
import { MarginContainer, H1, H2, YELLOW } from '../styles/styles';
import { SingleWorksDescription } from '../styles/index.styles';
import Button from '../components/Button';

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
                        document {
                          ... on PrismicVideo {
                            uid
                            id
                            data {
                              title {
                                text
                              }
                              embed {
                                thumbnail_url
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
      <MarginContainer>
        <H1>{mainHeading.text}</H1>
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
