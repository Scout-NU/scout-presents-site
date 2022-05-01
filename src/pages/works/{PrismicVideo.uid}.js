import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Video from '../../components/Video';

const VideoPage = ({ data }) => {
  if (!data) return null;
  const {
    prismicVideo: {
      data: {
        title: { text: title },
        embed,
        project: { document: project },
        details: { richText: details },
        date_published: datePublished,
      },
    },
  } = data;

  return (
    <Layout>
      <Video
        title={title}
        embed={embed}
        details={details}
        project={project}
        datePublished={datePublished}
      />
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
          upload_date(formatString: "MMMM DD, YYYY")
        }
        date_published(formatString: "MMMM DD, YYYY")
        project {
          document {
            ... on PrismicProject {
              uid
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
