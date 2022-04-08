import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const About = () => {
  const aboutQuery = useStaticQuery(graphql`
    query aboutQuery {
      prismicAboutPage {
        data {
          callout_cta_label {
            text
          }
          callout_heading {
            text
          }
          main_heading {
            text
          }
          sections {
            image {
              url
            }
            section_header {
              text
            }
            section_text {
              text
            }
          }
        }
      }
    }
  `);

  const {
    prismicAboutPage: {
      data: {
        main_heading: mainHeading,
        sections,
        callout_heading: calloutHeading,
        callout_cta_label: calloutLabel,
      },
    },
  } = aboutQuery;

  return (
    <Layout>
      <h1>{mainHeading.text}</h1>
      {sections.map((section) => {
        return section.section_header.text; //TODO;
      })}
      <h1>{calloutHeading.text}</h1>
      <h1>{calloutLabel.text}</h1>
    </Layout>
  );
};

export default About;
