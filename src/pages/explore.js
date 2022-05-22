import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import FeaturedContent from '../components/FeaturedContent';
import ExploreCarousel from '../components/ExploreCarousel';
import ExploreNav from '../components/ExploreNav';

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
      <ExploreNav />
      <FeaturedContent />
      {sections.map((section) => {
        return (
          <ExploreCarousel
            id={section.section.document.uid}
            key={section.section.document.id}
            section={section.section.document}
          />
        );
      })}
    </Layout>
  );
};

export default Explore;
