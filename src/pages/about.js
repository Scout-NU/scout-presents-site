import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import CallOut from "../components/Callout";

import { H1, H3, P } from "../styles/styles";

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
      <H1>{mainHeading.text}</H1>
      <div>
        <img
          src={sections[0].image.url}
          alt={sections[0].section_header.text}
          width="30%"
        />
        <H3>{sections[0].section_header.text}</H3>
        <P>{sections[0].section_text.text}</P>
      </div>
      <div>
        <H3>{sections[1].section_header.text}</H3>
        <P>{sections[1].section_text.text}</P>
        <img
          src={sections[1].image.url}
          alt={sections[1].section_header.text}
          width="30%"
        />
      </div>

      <CallOut header={calloutHeading.text} label={calloutLabel.text}></CallOut>
    </Layout>
  );
};

export default About;
