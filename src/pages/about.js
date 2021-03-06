import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import CallOut from '../components/Callout';
import {
  AboutDescription,
  WhoImages,
  AboutTitle,
  Section,
  ReverseSection,
  AboutImages,
} from '../styles/about.styles';
import { PrismicRichText } from '@prismicio/react';
import { H1, H2, MarginContainer } from '../styles/styles';

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
          overview_section {
            text
          }
          overview_section_text {
            richText
          }
          left_image {
            alt
            url
          }
          right_image {
            alt
            url
          }
          who_section_heading {
            text
          }
          who_section_text {
            richText
          }
        }
      }
    }
  `);

  const {
    prismicAboutPage: {
      data: {
        main_heading: mainHeading,
        left_image: leftImage,
        right_image: rightImage,
        overview_section: overviewSection,
        overview_section_text: overviewSectionText,
        who_section_heading: whoSectionHeading,
        who_section_text: whoSectionText,
        callout_heading: calloutHeading,
        callout_cta_label: calloutLabel,
      },
    },
  } = aboutQuery;

  return (
    <Layout>
      <title>About Scout Presents</title>
      <MarginContainer>
        <AboutTitle>
          <H1>{mainHeading.text}</H1>
        </AboutTitle>
        <Section>
          <AboutDescription>
            <H2 bold>{overviewSection.text}</H2>
            <PrismicRichText field={overviewSectionText.richText} />
          </AboutDescription>
          <AboutImages src={rightImage.url} alt={rightImage.alt} />
        </Section>
        <ReverseSection>
          <WhoImages src={leftImage.url} alt={leftImage.alt} />
          <AboutDescription>
            <H2 bold>{whoSectionHeading.text}</H2>
            <PrismicRichText field={whoSectionText.richText} />
          </AboutDescription>
        </ReverseSection>
      </MarginContainer>
      <CallOut header={calloutHeading.text} label={calloutLabel.text}></CallOut>
    </Layout>
  );
};

export default About;
