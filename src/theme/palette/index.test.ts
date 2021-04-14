import { palette } from '.';

describe('palette', () => {
  it('should match snapshot', () => {
    expect(palette).toMatchSnapshot();
  });
});
