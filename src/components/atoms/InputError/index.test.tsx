import React from 'react';
import { render } from '__tests__/utils';
import { InputError } from '.';

describe('InputError.tsx', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<InputError>Unexpected error.</InputError>);

    expect(baseElement).toMatchSnapshot();
  });
});
