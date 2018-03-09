import palx from 'palx';

export const space = [0, 4, 8, 12, 16, 24, 32, 64]

export const font =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const weights = [400, 500]

export const lineHeights = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 2,
};

export function textIndent(indent) {
  return `
    text-indent: 50px;
  `;
}

const palette = palx('#fff');

const flattened = Object.keys(palette).reduce((accumlator, key) => {
  const value = palette[key];

  if (Array.isArray(value)) {
    accumlator[key] = value[5];
    value.forEach((element, i) => {
      accumlator[key + i] = element;
    });
  } else {
    accumlator[key] = value;
  }

  return accumlator;
}, {});

export const colors = {
  black: '#000',
  white: '#fff',
  ...flattened,
};

export const shadows = {
  none: 'none',
  small: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)',
  medium: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)',
  outline: `0 0 0 2px ${colors.base}`,
};

export const radius = 4;

export default {
  space,
  font,
  weights,
  lineHeights,
  colors,
  shadows,
  radius,
};
