import * as React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";
import Layout from "../../components/Layout";
import { PrismicRichText } from "@prismicio/react";

const ArticlePage = ({ data }) => {
  if (!data) return null;
  const {
    prismicArticle: {
      data: {
        title: { text: title },
        article_content: { richText: articleContent },
        author: { text: author },
        image: { url: imageUrl, alt: imageAlt },
        image_caption: { text: imageCaption },
        secondary_image: { url: secondaryImageUrl, alt: secondaryImageAlt },
      },
    },
  } = data;

  return (
    <Layout>
      <h1>{title.text}</h1>
    </Layout>
  );
};

export const articleQuery = graphql`
  query ArticlePageQuery($uid: String) {
    prismicArticle(uid: { eq: $uid }) {
      data {
        article_content {
          richText
        }
        author {
          text
        }
        image {
          url
          alt
        }
        image_caption {
          text
        }
        secondary_image {
          url
          alt
        }
        title {
          text
        }
      }
    }
  }
`;

export default ArticlePage;
