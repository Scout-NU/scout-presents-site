import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MarginContainer } from "../styles/styles";
import Layout from "../components/Layout";
import FeaturedContent from "../components/FeaturedContent";
import ExploreCarousel from "../components/ExploreCarousel";
import ExploreNav from "../components/ExploreNav";

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
      <ExploreNav />
      <MarginContainer>
        <FeaturedContent />
      </MarginContainer>
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
