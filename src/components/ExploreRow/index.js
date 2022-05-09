import React from "react";
import { H3, H2 } from "../../styles/styles";
import {
  FlexContainer,
  responsive,
  responsiveArticle,
  FlexRow,
  Work,
  LeftIcon,
  RightIcon,
  StyledP,
  StyledImage,
  StyledArticleImage,
  ItemContainer,
} from "./styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PrismicRichText } from "@prismicio/react";

const ExploreRow = ({ section }) => {
  const {
    data: { title, works },
    uid: sectionuid,
  } = section;

  const CustomLeftArrow = ({ onClick }) => (
    <LeftIcon onClick={() => onClick()} />
  );
  const CustomRightArrow = ({ onClick }) => {
    return <RightIcon onClick={() => onClick()} />;
  };

  const Watch = () => (
    <Carousel
      responsive={responsive}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      infinite={true}
    >
      {works.map((work) => {
        const {
          work: {
            document: {
              uid,
              data: { title, thumbnail, preview_text: previewText },
            },
          },
        } = work;
        return (
          <ItemContainer>
            <Work key={uid}>
              <StyledImage alt={title.text} src={thumbnail.url} />
              <H3>{title.text}</H3>
              <PrismicRichText
                field={previewText.richText}
                components={{
                  paragraph: ({ children }) => <StyledP>{children}</StyledP>,
                }}
              />
            </Work>
          </ItemContainer>
        );
      })}
    </Carousel>
  );

  const Read = () => (
    <Carousel
      responsive={responsiveArticle}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      infinite={true}
    >
      {works.map((work, idx) => {
        const {
          work: {
            document: {
              uid,
              data: { title, thumbnail, preview_text: previewText },
            },
          },
        } = works[idx];

        if (idx % 2 == 1) {
          const {
            work: {
              document: {
                uid: uidTop,
                data: {
                  title: titleTop,
                  thumbnail: thumbnailTop,
                  preview_text: previewTextTop,
                },
              },
            },
          } = works[idx - 1];
          return (
            <ItemContainer>
              <Work key={uidTop}>
                <FlexRow>
                  <StyledArticleImage
                    alt={titleTop.text}
                    src={thumbnailTop.url}
                  />
                  <FlexContainer>
                    <H3>{titleTop.text}</H3>
                    <PrismicRichText
                      field={previewTextTop.richText}
                      components={{
                        paragraph: ({ children }) => (
                          <StyledP>{children}</StyledP>
                        ),
                      }}
                    />
                  </FlexContainer>
                </FlexRow>
              </Work>
              <Work key={uid}>
                <FlexRow>
                  <StyledArticleImage alt={title.text} src={thumbnail.url} />
                  <FlexContainer>
                    <H3>{title.text}</H3>
                    <PrismicRichText
                      field={previewText.richText}
                      components={{
                        paragraph: ({ children }) => (
                          <StyledP>{children}</StyledP>
                        ),
                      }}
                    />
                  </FlexContainer>
                </FlexRow>
              </Work>
            </ItemContainer>
          );
        }
      })}
    </Carousel>
  );

  return (
    <FlexContainer>
      {sectionuid === "read" || sectionuid === "watch" ? (
        <div>
          <H2 bold>{title.text}</H2>
          {sectionuid === "read" ? <Read /> : <Watch />}
        </div>
      ) : null}
    </FlexContainer>
  );
};

export default ExploreRow;

//TODO: refactor watch vs read, styling arrows and articles,
