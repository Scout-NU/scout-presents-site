import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { H1, P, MarginContainer } from "../../styles/styles";
import { ArticleContainer, Section, StyledP } from "./styled";

const Article = ({
  title,
  content,
  author,
  imageUrl,
  imageAlt,
  imageCaption,
  secondaryImageUrl,
  secondaryImageAlt,
}) => {
  return (
    <MarginContainer>
      <ArticleContainer>
        <Section>
          <H1>{title}</H1>
          <P>{author}</P>
        </Section>
        <Section>
          <img src={imageUrl} alt={imageAlt} width="100%" />
          <P>{imageCaption} </P>
        </Section>
        <Section>
          <StyledP>
            <PrismicRichText field={content} />
          </StyledP>
          <img src={secondaryImageUrl} alt={secondaryImageAlt} />
        </Section>
      </ArticleContainer>
    </MarginContainer>
  );
};

export default Article;
