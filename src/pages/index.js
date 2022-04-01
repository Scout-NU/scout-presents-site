import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import ProjectPreview from '../components/ProjectPreview';

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
      <h1>{mainHeading.text}</h1>
      <h2>{blurb.text}</h2>
      {projects.map((project) => {
        return <ProjectPreview project={project.project.document} />;
      })}
      <h1>{singleWorksHeading.text}</h1>
      <p>{singleWorksDescription.text}</p>
      <button>Watch</button>
    </Layout>
  );
};

export default IndexPage;
