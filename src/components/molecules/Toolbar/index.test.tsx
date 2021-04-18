import React from 'react';
import { render } from '__tests__/utils';
import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { Toolbar } from '.';

describe('Toolbar.tsx', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(
      <Toolbar>
        <Button>Sort</Button>
        <Input placeholder="Search..." />
      </Toolbar>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
