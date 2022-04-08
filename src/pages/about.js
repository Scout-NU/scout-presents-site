import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import {
  ButtonText,
  Container,
  H1,
  H2,
  H3,
  P,
  PrimaryButton,
  YELLOW,
} from "../styles/styles";

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
      {sections.map((section) => {
        return (
          <div>
            <img
              src={section.image.url}
              alt={section.section_header.text}
              width="30%"
            />
            <H3>{section.section_header.text}</H3>
            <P>{section.section_text.text}</P>
          </div>
        );
      })}
      <H2>{calloutHeading.text}</H2>
      <PrimaryButton>
        <ButtonText>{calloutLabel.text}</ButtonText>
      </PrimaryButton>
    </Layout>
  );
};

export default About;
