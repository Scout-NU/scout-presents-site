import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

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
            text
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
      <img src={headerImage.url} alt={headerImage.alt} />
      <h1>{submitTitle.text}</h1>
    </Layout>
  );
};

export default Submit;
