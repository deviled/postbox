import React from 'react';
import { screen, render } from '__tests__/utils';
import userEvent from '@testing-library/user-event';
import { Input } from '.';

describe('Input.tsx', () => {
  const getInput = () => screen.getByRole('textbox');

  it('should match snapshot', () => {
    const { baseElement } = render(<Input type="text" placeholder="Search..." />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should match snapshot with error', () => {
    const { baseElement } = render(<Input type="text" placeholder="Search..." isError />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should have value typed', () => {
    const INPUT_VALUE = 'some input value';

    render(<Input name="test" />);

    userEvent.type(getInput(), INPUT_VALUE);

    expect(getInput()).toHaveValue(INPUT_VALUE);
  });
});
