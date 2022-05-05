import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { H2, P, H3, YELLOW, MarginContainer } from "../styles/styles";
import { PrismicRichText } from "@prismicio/react";
import {
  HeaderImage,
  GetInvolvedSection,
  QuestionsSection,
  QuestionsText,
  GetInvolvedText,
  ContentContainer,
  InformationContainer,
  FormContainer,
  FormRow,
  Input,
  TextArea,
  SubmitDescription,
  HiddenInput,
  UploadButton,
  UploadButtonText,
  UploadIcon,
  PaddedInput,
  SubmitContainer,
} from "../styles/submit.styles";
import Button from "../components/Button";

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
        questions,
        submit_button_label: submitButtonLabel,
        submit_intro: submitIntro,
        submit_title: submitTitle,
        upload_button_label: uploadButtonLabel,
      },
    },
  } = submitQuery;

  return (
    <Layout>
      <HeaderImage src={headerImage.url} alt={headerImage.alt} />
      <MarginContainer>
        <ContentContainer>
          <InformationContainer>
            <GetInvolvedSection>
              <GetInvolvedText>
                <PrismicRichText
                  field={getInvolved.richText}
                  components={{
                    paragraph: ({ children }) => <P>{children}</P>,
                    heading3: ({ children }) => <H3>{children}</H3>,
                  }}
                />
              </GetInvolvedText>
            </GetInvolvedSection>
            <QuestionsSection>
              <QuestionsText>
                <PrismicRichText
                  field={questions.richText}
                  components={{
                    paragraph: ({ children }) => <P>{children}</P>,
                    heading3: ({ children }) => <H3>{children}</H3>,
                  }}
                />
              </QuestionsText>
            </QuestionsSection>
          </InformationContainer>
          <FormContainer>
            <H2>{submitTitle.text}</H2>
            <PrismicRichText
              field={submitIntro.richText}
              components={{
                paragraph: ({ children }) => (
                  <SubmitDescription>{children}</SubmitDescription>
                ),
              }}
            />
            <form
              name="Submit Work Form"
              method="POST"
              data-netlify="true"
              action="/submit"
            >
              <input type="hidden" name="form-name" value="Submit Work Form" />
              <FormRow>
                <PaddedInput
                  placeholder={nameLabel.text}
                  name={nameLabel.text}
                />
                <PaddedInput
                  placeholder={emailLabel.text}
                  name={emailLabel.text}
                />
              </FormRow>
              <Input
                placeholder={projectTitleLabel.text}
                name={projectTitleLabel.text}
              ></Input>
              <Input
                placeholder={projectMediumLabel.text}
                name={projectMediumLabel.text}
              ></Input>
              <Input
                placeholder={creditsLabel.text}
                name={creditsLabel.text}
              ></Input>
              <Input
                placeholder={equipmentLabel.text}
                name={equipmentLabel.text}
              ></Input>
              <TextArea
                placeholder={projectDescriptionLabel.text}
                name={projectDescriptionLabel.text}
              />
              <FormRow>
                <UploadButton>
                  <HiddenInput type="file" />
                  <UploadButtonText>
                    <UploadIcon />
                    {uploadButtonLabel.text}
                  </UploadButtonText>
                </UploadButton>
                <PrismicRichText
                  field={callToAction.richText}
                  components={{
                    paragraph: ({ children }) => (
                      <SubmitDescription>{children}</SubmitDescription>
                    ),
                  }}
                />
              </FormRow>
              <SubmitContainer>
                <Button type="submit" color={YELLOW}>
                  {submitButtonLabel.text}
                </Button>
              </SubmitContainer>
            </form>
          </FormContainer>
        </ContentContainer>
      </MarginContainer>
    </Layout>
  );
};

export default Submit;
