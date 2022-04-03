import styled, { keyframes, css } from 'styled-components';
import { BLUE, Display } from '../../styles/styles';

const FRAME_HEIGHT = 2220;
const animationDuration = (layer) => 15 / layer;
const speed = (layer) => FRAME_HEIGHT / animationDuration(layer);
const fallDuration = (props) =>
  (FRAME_HEIGHT - props.startPos[0] - props.h) / speed(props.layer);
const loopDuration = (props) => FRAME_HEIGHT / speed(props.layer);

const fallAnimation = (height) => keyframes`
  100% {
    top: ${FRAME_HEIGHT - height}px;
  }
`;

const loopAnimation = (height) => keyframes`
  from {
    top: -${height}px;
  }
  to {
    top: ${FRAME_HEIGHT - height}px;
  }
`;

const animationName = css`
  animation-name: ${(props) => fallAnimation(props.h)},
    ${(props) => loopAnimation(props.h)};
`;

export const Image = styled.img`
  position: absolute;
  top: ${(props) => props.startPos[0]}px;
  left: ${(props) => props.startPos[1]}px;
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

export const Title = styled(Display)`
  background-color: ${BLUE};
  border-radius: 23px;
  position: absolute;
  padding: 0.75rem;
  padding-top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`;
