import { fontSize } from '.';

describe('fontSize', () => {
  it('should match snapshot', () => {
    expect(fontSize).toMatchSnapshot();
  });
});
