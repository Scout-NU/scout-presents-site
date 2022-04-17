import styled, { keyframes, css } from 'styled-components';
import { min } from '../../styles/breakpoints';
import { BLUE, Display } from '../../styles/styles';

const frameHeight = (props) => (props.mobile ? 1284 : 2220);

/**
 * how long it should take an element to fall from the top of the frame to the bottom
 *
 * use the element's layer on the screen to calculate dynamic durations
 *
 * elements with lower layer number are furthest from the eye and
 * appear to fall more slowly
 */
const animationDuration = (props) => 20;

/**
 * s = d/t, using frame height as the distance we want elements to travel and
 * animationDuration as the time we want it to take them to reach the bottom
 *
 * use the element's layer on the screen to calculate dynamic speeds
 */
const speed = (props) => frameHeight(props) / animationDuration(props);

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
  (frameHeight(props) - props.startPos[0] - props.dimensions[1]) / speed(props);

/**
 * uses the frame height to determine the distance each element needs to fall
 * uses the element's layer to determine the speed at which it should fall
 *
 * t = d/s
 */
const loopDuration = (props) => frameHeight(props) / speed(props);

/**
 * this animation iterates only once since each element starts at a different y position
 */
const fallAnimation = (props) => keyframes`
  to {
    top: ${frameHeight(props) - props.dimensions[1]}px;
  }
`;

/**
 * this animation repeats on a loop once the first animation ends
 *
 * resets the element's position at the top of the frame so the loop is smooth
 */
const loopAnimation = (props) => keyframes`
  from {
    top: -${props.dimensions[1]}px;
  }
  to {
    top: ${frameHeight(props) - props.dimensions[1]}px;
  }
`;

const animationName = css`
  animation-name: ${(props) => fallAnimation(props)},
    ${(props) => loopAnimation(props)};
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
  top: ${(props) => props.startPos[0]}px;
  left: ${(props) => props.startPos[1]}px;
  width: ${(props) => props.dimensions[0]}px;
  ${animationName}
  animation-duration: ${fallDuration}s, ${loopDuration}s;
  animation-delay: 0s, ${fallDuration}s;
  animation-timing-function: linear;
  animation-iteration-count: 1, infinite;
  z-index: ${(props) => props.layer};
`;

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

export const Frame = styled.div`
  width: 768px;
  height: 424px;
  flex-shrink: 0;
  background-color: ${BLUE};
  position: relative;
  overflow: hidden;

  ${min.tablet} {
    width: 1440px;
    height: 693px;
  }
  ${min.desktop} {
    height: 841px;
  }
`;

const baseStyles = `
  position: absolute;
  // background-color: ${BLUE};
  border-radius: 23px;
  z-index: 4;
`;

export const Title = styled(Display)`
  ${baseStyles}
  padding: 0.75rem;
  padding-top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
