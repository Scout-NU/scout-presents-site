import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import CallOut from "../components/Callout";
import {
  AboutDescription,
  AboutTitle,
  Section,
  ReverseSection,
  AboutImages,
} from "../styles/about.styles";
import { RichText } from "prismic-reactjs";

import { H1, H3, P, MarginContainer } from "../styles/styles";

const About = () => {
  const aboutQuery = useStaticQuery(graphql`
    query AboutQuery {
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
              richText
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
      <MarginContainer>
        <AboutTitle>
          <H1>{mainHeading.text}</H1>
        </AboutTitle>
        <Section>
          <AboutDescription>
            <H3 bold>{sections[0].section_header.text}</H3>
            <P>
              <RichText render={sections[0].section_text.richText} />
            </P>
          </AboutDescription>
          <AboutImages>
            <img
              src={sections[0].image.url}
              alt={sections[0].section_header.text}
              width="100%"
            />
          </AboutImages>
        </Section>
        <ReverseSection>
          <AboutImages>
            <img
              src={sections[1].image.url}
              alt={sections[1].section_header.text}
              width="100%"
            />
          </AboutImages>
          <AboutDescription>
            <H3 bold>{sections[1].section_header.text}</H3>
            <P>
              <RichText render={sections[1].section_text.richText} />
            </P>
          </AboutDescription>
        </ReverseSection>
      </MarginContainer>

      <CallOut header={calloutHeading.text} label={calloutLabel.text}></CallOut>
    </Layout>
  );
};

export default About;
