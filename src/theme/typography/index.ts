export type FontSize = 12 | 14 | 16 | 18;
export type FontWeight = 'light' | 'regular' | 'bold';

export interface Typography {
  fontSize: Record<FontSize, string>;
  fontWeight: Record<FontWeight, number>;
}

export const typography: Typography = {
  fontSize: {
    12: '0.75rem',
    14: '0.875rem',
    16: '1rem',
    18: '1.125rem',
  },
  fontWeight: {
    light: 200,
    regular: 400,
    bold: 600,
  },
};
