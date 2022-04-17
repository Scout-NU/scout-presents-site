const breakpoints = [
  ['tablet', 768],
  ['desktop', 1280],
  ['desktopLg', 1440],
];

/**
 * min-width queries for every breakpoint.
 *
 * e.g. mobile: '(min-width: 320px)'
 */
export const min = breakpoints.reduce(
  (acc, [name, size]) => ({
    ...acc,
    [name]: `@media (min-width: ${size}px)`,
  }),
  {}
);
