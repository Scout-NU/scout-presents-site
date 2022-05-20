import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import ExploreCarousel from "../components/ExploreCarousel";

const Explore = () => {
  const exploreQuery = useStaticQuery(graphql`
    query exploreQuery {
      prismicExplorePage {
        data {
          sections {
            section {
              document {
                ... on PrismicExploreSection {
                  id
                  uid
                  data {
                    title {
                      text
                    }
                    works {
                      work {
                        document {
                          ... on PrismicVideo {
                            uid
                            data {
                              title {
                                text
                              }
                              thumbnail {
                                url
                              }
                              preview_text {
                                text
                              }
                            }
                          }
                          ... on PrismicArticle {
                            uid
                            data {
                              thumbnail {
                                url
                              }
                              title {
                                text
                              }
                              preview_text {
                                text
                              }
                            }
                          }
                          ... on PrismicGallery {
                            uid
                            data {
                              thumbnail {
                                url
                              }
                              title {
                                text
                              }
                              images {
                                image {
                                  url
                                  alt
                                  dimensions {
                                    height
                                    width
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
      }
    }
  `);

  const {
    prismicExplorePage: {
      data: { sections },
    },
  } = exploreQuery;

  return (
    <Layout>
      {sections.map((section) => {
        return (
          <ExploreCarousel
            key={section.section.document.id}
            section={section.section.document}
          />
        );
      })}
    </Layout>
  );
};

export default Explore;
