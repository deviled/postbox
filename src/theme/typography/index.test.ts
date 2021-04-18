import { typography } from '.';

describe('typography', () => {
  it('should match snapshot', () => {
    expect(typography).toMatchSnapshot();
  });
});
