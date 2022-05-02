import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Article from "../../components/Article";

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
      },
    },
  } = data;

  return (
    <Layout>
      <Article
        title={title}
        content={articleContent}
        author={author}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        imageCaption={imageCaption}
      />
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
        title {
          text
        }
      }
    }
  }
`;

export default ArticlePage;
