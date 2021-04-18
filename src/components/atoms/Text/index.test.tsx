import React, { FC } from 'react';
import { render } from '__tests__/utils';
import { Text } from '.';

describe('Text.tsx', () => {
  const Component: FC = () => (
    <Text color="white" bgcolor="error">
      Error input
    </Text>
  );

  it('should match snapshot', () => {
    const { baseElement } = render(<Component />);

    expect(baseElement).toMatchSnapshot();
  });
});
