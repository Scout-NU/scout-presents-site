import * as React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import Layout from '../../components/Layout';
import { PrismicRichText } from '@prismicio/react';

const VideoPage = ({ data }) => {
  if (!data) return null;
  const {
    prismicVideo: {
      data: {
        title,
        embed,
        project: {
          document: {
            data: { name: projectName },
          },
        },
        details,
      },
    },
  } = data;

  return (
    <Layout>
      {parse(embed.html)}
      <h1>{title.text}</h1>
      <p>{projectName.text}</p>
      <PrismicRichText field={details.richText} />
    </Layout>
  );
};

export const query = graphql`
  query VideoPageQuery($uid: String) {
    prismicVideo(uid: { eq: $uid }) {
      data {
        title {
          text
        }
        embed {
          html
        }
        project {
          document {
            ... on PrismicProject {
              data {
                name {
                  text
                }
              }
            }
          }
        }
        details {
          richText
        }
      }
    }
  }
`;

export default VideoPage;
