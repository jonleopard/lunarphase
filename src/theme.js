import palx from 'palx';

export const space = [0, 4, 8, 12, 16, 24, 32, 64]

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
  small: '255 255 255 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(255, 255, 255, 0.1)',
  medium: '255 255 255 1px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(255, 255, 0, 0.1)',
  outline: `255 255 255 2px ${colors.base}`,
};

export const radius = 4;

export default {
  space,
  weights,
  lineHeights,
  colors,
  shadows,
  radius,
};
