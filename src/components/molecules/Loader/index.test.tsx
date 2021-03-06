import React from 'react';
import { render } from '__tests__/utils';
import { Loader } from 'components/molecules/Loader/index';

describe('Loader.tsx', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<Loader />);

    expect(baseElement).toMatchSnapshot();
  });
});
