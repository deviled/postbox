type Size = 12 | 14 | 16;

export type FontSize = Record<Size, string>;

export const fontSize: FontSize = {
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
};
