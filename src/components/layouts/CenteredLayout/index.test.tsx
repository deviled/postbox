import React from 'react';
import { render } from '__tests__/utils';
import { Centered } from '.';

describe('Centered.tsx', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<Centered />);

    expect(baseElement).toMatchSnapshot();
  });
});
