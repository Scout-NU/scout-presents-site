const breakpoints = {
  tablet: 768,
  desktop: 1280,
  desktopLg: 1440,
};

/**
 * min-width queries for every breakpoint.
 *
 * e.g. mobile: '@media (min-width: 320px)'
 */
export const min = Object.entries(breakpoints).reduce(
  (acc, [name, size]) => ({
    ...acc,
    [name]: `@media (min-width: ${size}px)`,
  }),
  {}
);

/**
 * max-width queries for every breakpoint.
 *
 * e.g. mobile: '@media (max-width: 320px)'
 */
export const max = Object.entries(breakpoints).reduce(
  (acc, [name, size]) => ({
    ...acc,
    [name]: `@media (max-width: ${size}px)`,
  }),
  {}
);

export default breakpoints;
