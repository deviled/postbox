export type Space = 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32;

export const values: Record<Space, string> = {
  0: '0px',
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
};

const createSpacing = () => (...args: Space[]) => {
  if (args.length > 4) {
    throw Error(`Max 4 arguments theme.spacing(${args.join(', ')})`);
  }
  if (args.length > 1) {
    return args.map((value) => values[value]).join(' ');
  }
  return values[args[0]];
};

export const spacing = createSpacing();
