import React from 'react';
import { render } from '__tests__/utils';
import { getPostFixture } from '__tests__/mocks/fixtures/posts';
import { PostItem } from '.';

describe('PostItem.tsx', () => {
  it('should match snapshot', () => {
    const { created_time: createdTime, message } = getPostFixture();
    const { baseElement } = render(
      <PostItem createdTime={createdTime}>
        {message}
      </PostItem>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
