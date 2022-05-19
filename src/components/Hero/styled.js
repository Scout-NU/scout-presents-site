import styled, { keyframes, css } from 'styled-components';
import { min } from '../../styles/breakpoints';
import { BLUE, CREAM } from '../../styles/styles';

/**
 * the height of the invisible frame controlling the falling elements
 *
 * returns a dynamic height based on device size
 */
const frameHeight = (isMobile) => (isMobile ? 1284 : 2220);

/**
 * how long it should take an element to fall from the top of the frame to the bottom
 *
 * use the element's layer on the screen to calculate dynamic durations
 *
 * elements with lower layer number are furthest from the eye and
 * appear to fall more slowly
 */
const animationDuration = (layer) => 20 / layer;

/**
 * s = d/t, using frame height as the distance we want elements to travel and
 * animationDuration as the time we want it to take them to reach the bottom
 *
 * use the element's layer on the screen to calculate dynamic speeds
 */
const speed = (isMobile, layer) =>
  frameHeight(isMobile) / animationDuration(layer);

/**
 * since each element starts at a different y position, they need dynamic durations to
 * appear to fall at the same speed
 *
 * uses the element's start position and height to determine the distance it needs to fall
 * uses the element's layer to determine the speed at which it should fall
 *
 * t = d/s
 */
const fallDuration = (props) =>
  (frameHeight(props.mobile) - props.startPos[1] - props.dimensions[1]) /
  speed(props.mobile, props.layer);

/**
 * uses the frame height to determine the distance each element needs to fall
 * uses the element's layer to determine the speed at which it should fall
 *
 * t = d/s
 */
const loopDuration = (props) =>
  frameHeight(props.mobile) / speed(props.mobile, props.layer);

/**
 * keyframes!
 *
 * this animation iterates only once since each element starts at a different nonzero y position
 */
const fallAnimation = (isMobile, imgHeight) => keyframes`
  to {
    top: ${frameHeight(isMobile) - imgHeight}px;
  }
`;

/**
 * keyframes!
 *
 * this animation repeats on a loop once the first animation ends
 *
 * resets the element's position at the top of the frame so the loop is smooth
 */
const loopAnimation = (isMobile, imgHeight) => keyframes`
  from {
    top: -${imgHeight}px;
  }
  to {
    top: ${frameHeight(isMobile) - imgHeight}px;
  }
`;

const animationName = css`
  animation-name: ${(props) => fallAnimation(props.mobile, props.dimensions[1])},
    ${(props) => loopAnimation(props.mobile, props.dimensions[1])};
`;

/**
 * our animation is split into 2 stages: the initial fall from the start position and
 * the loop from top to bottom
 *
 * the delay of the second animation is equal to the duration of the first animation
 *
 * the first animation iterates once and the second iterates on a loop
 */
export const Image = styled.img`
  position: absolute;
  top: ${(props) => props.startPos[1]}px;
  left: ${(props) => props.startPos[0]}px;
  width: ${(props) => props.dimensions[0]}px;
  z-index: ${(props) => props.layer};
  ${animationName}
  animation-duration: ${fallDuration}s, ${loopDuration}s;
  animation-delay: 0s, ${fallDuration}s;
  animation-timing-function: linear;
  animation-iteration-count: 1, infinite;
`;

export const Container = styled.div`
  width: 100%;
  background-color: ${BLUE};
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid ${CREAM};
`;

const frameStyles = css`
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
`;

export const MobileFrame = styled.div`
  ${frameStyles}
  width: 768px;
  height: 424px;

  ${min.tablet} {
    display: none;
  }
`;

export const Frame = styled.div`
  ${frameStyles}
  display: none;

  ${min.tablet} {
    display: block;
    width: 1440px;
    height: 693px;
  }
  ${min.desktop} {
    height: 841px;
  }
`;

export const LogoImage = styled.img`
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18rem;
  ${min.tablet} {
    width: 36rem;
  }
  ${min.desktop} {
    width: 50rem;
  }
`;
