import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { H1, H2, H3, P, MarginContainer } from "../../styles/styles";
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
          <P>{imageCaption}</P>
        </Section>
        <Section>
          <PrismicRichText
            field={content}
            components={{
              paragraph: ({ children }) => <StyledP>{children}</StyledP>,
              heading2: ({ children }) => <H2>{children}</H2>,
              heading3: ({ children }) => <H3>{children}</H3>,
            }}
          />
        </Section>
      </ArticleContainer>
    </MarginContainer>
  );
};

export default Article;
