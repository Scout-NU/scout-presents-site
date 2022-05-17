import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';

const ProjectPage = ({ data }) => {
  if (!data) return null;
  const {
    prismicProject: {
      data: { name: projectName, description: projectDescription, works },
    },
  } = data;

  return (
    <Layout>
      <h1>{projectName.text}</h1>
      <p>{projectDescription.text}</p>
      {works.map((work) => {
        const {
          content: {
            document: {
              uid,
              data: {
                thumbnail: { url: thumbnailUrl, alt },
              },
            },
          },
        } = work;
        return (
          <Link to={`/works/${uid}`} key={uid}>
            <img src={thumbnailUrl} alt={alt} />
          </Link>
        );
      })}
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
                  thumbnail {
                    url
                    alt
                  }
                }
              }
              ... on PrismicArticle {
                uid
                data {
                  thumbnail {
                    url
                    alt
                  }
                }
              }
              ... on PrismicGallery {
                uid
                data {
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
