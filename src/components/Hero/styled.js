import styled, { keyframes, css } from 'styled-components';
import { BLUE, Display, H2 } from '../../styles/styles';

const FRAME_HEIGHT = 2220;

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
const speed = (layer) => FRAME_HEIGHT / animationDuration(layer);

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
  (FRAME_HEIGHT - props.startPos[0] - props.dimensions[1]) / speed(props.layer);

/**
 * uses the frame height to determine the distance each element needs to fall
 * uses the element's layer to determine the speed at which it should fall
 *
 * t = d/s
 */
const loopDuration = (props) => FRAME_HEIGHT / speed(props.layer);

/**
 * this animation iterates only once since each element starts at a different y position
 */
const fallAnimation = (height) => keyframes`
  to {
    top: ${FRAME_HEIGHT - height}px;
  }
`;

/**
 * this animation repeats on a loop once the first animation ends
 *
 * resets the element's position at the top of the frame so the loop is smooth
 */
const loopAnimation = (height) => keyframes`
  from {
    top: -${height}px;
  }
  to {
    top: ${FRAME_HEIGHT - height}px;
  }
`;

const animationName = css`
  animation-name: ${(props) => fallAnimation(props.dimensions[1])},
    ${(props) => loopAnimation(props.dimensions[1])};
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
  top: ${(props) => (props.startPos[0] / 2220) * 100}%;
  left: ${(props) => (props.startPos[1] / 1440) * 100}%;
  width: ${(props) => (props.dimensions[0] / 1440) * 100}%;
  ${animationName}
  animation-duration: ${fallDuration}s, ${loopDuration}s;
  animation-delay: 0s, ${fallDuration}s;
  animation-timing-function: linear;
  animation-iteration-count: 1, infinite;
  z-index: ${(props) => props.layer};
`;

export const Container = styled.div`
  width: 100%;
  height: 841px;
  background-color: ${BLUE};
  position: relative;
  overflow: hidden;
`;

const baseStyles = `
  position: absolute;
  background-color: ${BLUE};
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

export const Blurb = styled(H2)`
  ${baseStyles}
  padding: 0.5rem;
  left: 3rem;
  bottom: 3rem;
  width: 27.25rem;
`;
