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
                embed: { thumbnail_url: thumbnail },
              },
            },
          },
        } = work;
        return (
          <Link to={`/works/${uid}`}>
            <img src={thumbnail} />
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
`;

export default ProjectPage;
