import React from 'react';
import { render } from '__tests__/utils';
import { getPostFixture } from '__tests__/mocks/fixtures/posts';
import { Post } from '.';

describe('Post.tsx', () => {
  it('should match snapshot', () => {
    const { message, created_time } = getPostFixture();
    const { baseElement } = render(
      <Post created_time={created_time} message={message} mb={32} />,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
