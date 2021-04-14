import React from 'react';
import { render } from '__tests__/utils';
import { getSenderFixture } from '__tests__/mocks/fixtures/senders';
import { SenderItem } from '.';

describe('SenderItem.tsx', () => {
  const { name, count } = getSenderFixture();

  it('should match snapshot', () => {
    const { baseElement } = render(<SenderItem name={name} count={count} />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should match active snapshot', () => {
    const { baseElement } = render(<SenderItem name={name} count={count} isActive />);

    expect(baseElement).toMatchSnapshot();
  });
});
