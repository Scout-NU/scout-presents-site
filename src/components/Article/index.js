import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { H1, P, MarginContainer } from "../../styles/styles";

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
      <H1>{title}</H1>
      <P>{author}</P>
      <img src={imageUrl} alt={imageAlt} />
      <P>{imageCaption} </P>
      <PrismicRichText field={content} />
      <img src={secondaryImageUrl} alt={secondaryImageAlt} />
    </MarginContainer>
  );
};

export default Article;
