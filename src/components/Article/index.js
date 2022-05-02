import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { H1, P, MarginContainer } from "../../styles/styles";
import { ArticleContainer, Section, StyledP, StyledImage } from "./styled";

const Article = ({
  title,
  content,
  author,
  imageUrl,
  imageAlt,
  imageCaption,
}) => {
  return (
    <MarginContainer>
      <ArticleContainer>
        <Section>
          <H1>{title}</H1>
          <P>{author}</P>
        </Section>
        <Section>
          <StyledImage src={imageUrl} alt={imageAlt} />
          <P>{imageCaption} </P>
        </Section>
        <Section>
          <StyledP>
            <PrismicRichText field={content} />
          </StyledP>
        </Section>
      </ArticleContainer>
    </MarginContainer>
  );
};

export default Article;
