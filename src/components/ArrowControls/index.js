import React from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { Controls, Arrow } from './styled';

/**
 * modulo function that works with negative divisors
 */
export const mod = (a, b) => ((a % b) + b) % b;

const ArrowControls = ({ setIndex, items }) => {
  const tabNext = () => {
    setIndex((i) => mod(i + 1, items.length));
  };

  const tabPrev = () => {
    setIndex((i) => mod(i - 1, items.length));
  };

  return (
    <Controls>
      <Arrow onClick={tabPrev}>
        <ArrowLeft />
      </Arrow>
      <Arrow onClick={tabNext}>
        <ArrowRight />
      </Arrow>
    </Controls>
  );
};

export default ArrowControls;
