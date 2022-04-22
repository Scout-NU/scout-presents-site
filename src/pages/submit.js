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
  FormRow,
  Input,
  TextArea,
  SubmitDescription,
} from "../styles/submit.styles";
import Button from "../components/Button";

const Submit = () => {
  const [file, setFile] = React.useState(null);

  const fileInput = React.useRef(null);

  const onChange = async (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

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
            <SubmitDescription>
              <PrismicRichText field={submitIntro.richText} />
            </SubmitDescription>
            <form name="Submit Work Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Submit Work Form" />
              <FormRow>
                <Input
                  type="text"
                  placeholder={nameLabel.text}
                  name={nameLabel.text}
                ></Input>
                <Input
                  type="text"
                  placeholder={emailLabel.text}
                  name={emailLabel.text}
                ></Input>
              </FormRow>
              <Input
                type="text"
                placeholder={projectTitleLabel.text}
                name={projectTitleLabel.text}
              ></Input>
              <Input
                type="text"
                placeholder={projectMediumLabel.text}
                name={projectMediumLabel.text}
              ></Input>
              <Input
                type="text"
                placeholder={creditsLabel.text}
                name={creditsLabel.text}
              ></Input>
              <Input
                type="text"
                placeholder={equipmentLabel.text}
                name={equipmentLabel.text}
              ></Input>
              <TextArea
                type="text"
                placeholder={projectDescriptionLabel.text}
                name={projectDescriptionLabel.text}
              ></TextArea>
              {/*  <input
                type="file"
                ref={fileInput}
                onChange={onChange}
                style={{ display: "none" }}
              />
              <Button onClick={() => fileInput.current.click()}>
                {uploadButtonLabel.text}
              </Button> */}
              <Input
                type="file"
                placeholder={equipmentLabel.text}
                name={equipmentLabel.text}
              ></Input>
              <PrismicRichText field={callToAction.richText} />
              <button type="submit">{submitButtonLabel.text}</button>
            </form>
          </FormContainer>
        </ContentContainer>
      </MarginContainer>
    </Layout>
  );
};

export default Submit;
