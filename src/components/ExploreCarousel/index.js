import React from "react";
import { H3, H2, StyledLink } from "../../styles/styles";
import {
  FlexContainer,
  responsiveWatch,
  responsiveRead,
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
import ExploreGallery from "../ExploreGallery";
import "react-multi-carousel/lib/styles.css";

const ExploreCarousel = ({ section }) => {
  const {
    data: { title, works },
    uid: sectionuid,
  } = section;

  const SingleCarousel = () => (
    <Carousel
      responsive={responsiveWatch}
      customRightArrow={<RightIcon />}
      customLeftArrow={<LeftIcon />}
      infinite={true}
      autoPlay={false}
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
            <StyledLink to={`../works/${uid}`}>
              <Work key={uid}>
                <StyledImage alt={title.text} src={thumbnail.url} />
                <H3>{title.text}</H3>
                <StyledP>{previewText.text}</StyledP>
              </Work>
            </StyledLink>
          </ItemContainer>
        );
      })}
    </Carousel>
  );

  const StackedCarousel = () => (
    <Carousel
      responsive={responsiveRead}
      customRightArrow={<RightIcon />}
      customLeftArrow={<LeftIcon />}
      infinite={true}
      autoPlay={false}
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

        if (idx % 2 === 1) {
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
              <StyledLink to={`../works/${uidTop}`}>
                <Work key={uidTop}>
                  <FlexRow>
                    <StyledArticleImage
                      alt={titleTop.text}
                      src={thumbnailTop.url}
                    />
                    <FlexContainer>
                      <H3>{titleTop.text}</H3>
                      <StyledP>{previewText.text}</StyledP>
                    </FlexContainer>
                  </FlexRow>
                </Work>
              </StyledLink>
              <StyledLink to={`../works/${uid}`}>
                <Work key={uid}>
                  <FlexRow>
                    <StyledArticleImage alt={title.text} src={thumbnail.url} />
                    <FlexContainer>
                      <H3>{title.text}</H3>
                      <StyledP>{previewTextTop.text}</StyledP>
                    </FlexContainer>
                  </FlexRow>
                </Work>
              </StyledLink>
            </ItemContainer>
          );
        } else {
          return null;
        }
      })}
    </Carousel>
  );

  return (
    <FlexContainer>
      <div>
        <H2 bold>{title.text}</H2>
        {sectionuid === "read" ? (
          <StackedCarousel />
        ) : sectionuid === "watch" ? (
          <SingleCarousel />
        ) : (
          <ExploreGallery works={works} />
        )}
      </div>
    </FlexContainer>
  );
};

export default ExploreCarousel;
