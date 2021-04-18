import React, { FC } from 'react';
import { render } from '__tests__/utils';
import { Button } from '.';

describe('Button.tsx', () => {
  const Component: FC = () => (
    <Button type="submit" color="white" bgcolor="info" mb={16}>
      Submit
    </Button>
  );

  it('should match snapshot', () => {
    const { baseElement } = render(<Component />);

    expect(baseElement).toMatchSnapshot();
  });
});
