import React from "react";
import { H3, H2 } from "../../styles/styles";
import {
  FlexContainer,
  responsive,
  Content,
  Work,
  LeftIcon,
  RightIcon,
} from "./styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../Button";

const ExploreRow = ({ section }) => {
  const {
    data: { title, works },
    uid,
  } = section;

  const CustomLeftArrow = ({ onClick }) => (
    <LeftIcon onClick={() => onClick()} />
  );
  const CustomRightArrow = ({ onClick }) => {
    return <RightIcon onClick={() => onClick()} />;
  };

  const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
    const { totalItems, currentSlide } = carouselState;
    return (
      <div className="custom-button-group">
        <div>Current slide is {currentSlide}</div>
        <button onClick={() => previous()}>Previous slide</button>
        <button onClick={() => next()}>Next slide</button>
        <button
          onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
        >
          Go to a random slide
        </button>
      </div>
    );
  };
  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h4>These buttons can be positioned anywhere you want on the screen</h4>
        <button onClick={previous}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    );
  };

  return (
    <FlexContainer>
      <H2 bold>{title.text}</H2>
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
                data: { title, thumbnail },
              },
            },
          } = work;
          return (
            <Work key={uid}>
              <img alt={title.text} src={thumbnail.url} height="300px" />
              <H3>{title.text}</H3>
            </Work>
          );
        })}
      </Carousel>
    </FlexContainer>
  );
};

export default ExploreRow;
