import React from 'react';
import { render } from '__tests__/utils';
import { SenderItem } from '.';

describe('SenderItem.tsx', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<SenderItem name="" count={10} />);

    expect(baseElement).toMatchSnapshot();
  });
});
