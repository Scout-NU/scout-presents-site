import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { H2, MarginContainer } from "../styles/styles";
import { PrismicRichText } from "@prismicio/react";
import {
  GetInvolvedSection,
  QuestionsSection,
  QuestionsText,
  GetInvolvedText,
  ContentContainer,
  InformationContainer,
  FormContainer,
} from "../styles/submit.styles";

const Submit = () => {
  const submitQuery = useStaticQuery(graphql`
    query submitQuery {
      prismicSubmitWorkPage {
        data {
          call_to_action {
            richText
          }
          credits_label {
            text
          }
          email_label {
            text
          }
          equipment_label {
            text
          }
          get_involved {
            richText
          }
          header_image {
            url
            alt
          }
          name_label {
            text
          }
          project_description_label {
            text
          }
          project_medium_label {
            text
          }
          project_title_label {
            text
          }
          questions {
            richText
          }
          submit_button_label {
            text
          }
          submit_intro {
            richText
          }
          submit_title {
            text
          }
          upload_button_label {
            text
          }
          upload_icon {
            alt
            url
          }
        }
      }
    }
  `);

  const {
    prismicSubmitWorkPage: {
      data: {
        call_to_action: callToAction,
        credits_label: creditsLabel,
        email_label: emailLabel,
        equipment_label: equipmentLabel,
        get_involved: getInvolved,
        header_image: headerImage,
        name_label: nameLabel,
        project_description_label: projectDescriptionLabel,
        project_medium_label: projectMediumLabel,
        project_title_label: projectTitleLabel,
        questions: questions,
        submit_button_label: submitButtonLabel,
        submit_intro: submitIntro,
        submit_title: submitTitle,
        upload_button_label: uploadButtonLabel,
        upload_icon: uploadIcon,
      },
    },
  } = submitQuery;

  return (
    <Layout>
      <img src={headerImage.url} alt={headerImage.alt} width="100%" />
      <MarginContainer>
        <ContentContainer>
          <InformationContainer>
            <GetInvolvedSection>
              <GetInvolvedText>
                <PrismicRichText field={getInvolved.richText} />
              </GetInvolvedText>
            </GetInvolvedSection>
            <QuestionsSection>
              <QuestionsText>
                <PrismicRichText field={questions.richText} />
              </QuestionsText>
            </QuestionsSection>
          </InformationContainer>
          <FormContainer>
            <H2>{submitTitle.text}</H2>
            <PrismicRichText field={submitIntro.richText} />
            <form
              name="Submit Work Form"
              method="POST"
              data-netlify="true"
              action="/"
            >
              <input type="hidden" name="form-name" value="Submit Work Form" />
              <input
                type="text"
                placeholder={nameLabel.text}
                name={nameLabel.text}
              ></input>
              <input
                type="text"
                placeholder={emailLabel.text}
                name={emailLabel.text}
              ></input>
              <input
                type="text"
                placeholder={projectTitleLabel.text}
                name={projectTitleLabel.text}
              ></input>
              <input
                type="text"
                placeholder={projectMediumLabel.text}
                name={projectMediumLabel.text}
              ></input>
              <input
                type="text"
                placeholder={creditsLabel.text}
                name={creditsLabel.text}
              ></input>
              <input
                type="text"
                placeholder={equipmentLabel.text}
                name={equipmentLabel.text}
              ></input>
              <input
                type="text"
                placeholder={projectDescriptionLabel.text}
                name={projectDescriptionLabel.text}
              ></input>
              <button type="submit">{submitButtonLabel.text}</button>
            </form>
          </FormContainer>
        </ContentContainer>
      </MarginContainer>
    </Layout>
  );
};

export default Submit;
