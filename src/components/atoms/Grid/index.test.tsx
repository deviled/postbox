import React from 'react';
import { render } from '__tests__/utils';
import { FlexBox, FlexCol } from '.';

describe('Grid.tsx', () => {
  it('should match FlexBox snapshot', () => {
    const { baseElement } = render(<FlexBox mb={4} mt={4} bgcolor="background" />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should match FlexCol snapshot', () => {
    const { baseElement } = render(<FlexCol mr={4} ml={4} bgcolor="error" />);

    expect(baseElement).toMatchSnapshot();
  });
});
