import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Gallery from '../../components/Gallery';

const GalleryPage = ({ data }) => {
  if (!data) return null;
  const {
    prismicGallery: {
      data: {
        title: { text: title },
        project: { document: project },
        artist_name: { text: artistName },
        date_published: datePublished,
        description: { text: description },
        images,
      },
    },
  } = data;

  return (
    <Layout>
      <title>{title}</title>
      <Gallery
        title={title}
        project={project}
        artistName={artistName}
        datePublished={datePublished}
        description={description}
        images={images}
      />
    </Layout>
  );
};

export const query = graphql`
  query GalleryPageQuery($uid: String) {
    prismicGallery(uid: { eq: $uid }) {
      data {
        title {
          text
        }
        artist_name {
          text
        }
        date_published(formatString: "MMMM DD, YYYY")
        description {
          text
        }
        images {
          image {
            url
            alt
          }
        }
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
      }
    }
  }
`;

export default GalleryPage;
