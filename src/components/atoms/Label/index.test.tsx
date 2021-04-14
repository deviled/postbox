import React, { FC } from 'react';
import { render } from '__tests__/utils';
import { Label } from '.';

describe('Label.tsx', () => {
  const Component: FC = () => (
    <Label>
      Name
      <input type="text" name="name" />
    </Label>
  );

  it('should match snapshot', () => {
    const { baseElement } = render(<Component />);

    expect(baseElement).toMatchSnapshot();
  });
});
