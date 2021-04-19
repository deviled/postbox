import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { screen, renderRoute } from '__tests__/utils';
import { POSTS_PAGE_PATH } from 'routing/routes';
import { getPostsFixture } from '__tests__/mocks/fixtures/posts';
import { PAGE_SIZE } from 'tools/constants';
import userEvent from '@testing-library/user-event';
import { IPost } from 'types';
import { PostsList } from '.';

const TEST_ID = 'posts-list';
const ITEMS_LENGTH = 20;

interface IRouteProps extends RouteComponentProps {
  posts?: IPost[]
}

describe('PostsList.tsx', () => {
  const getSearch = () => screen.getByRole('textbox');
  const posts = getPostsFixture(ITEMS_LENGTH);
  const getButton = (name: string) => screen.getByRole('button', { name });

  const Route: FC<IRouteProps> = ({ posts: defaultPosts = posts }) => (
    <PostsList posts={defaultPosts} />
  );

  it(`should have ${PAGE_SIZE} posts rendered initially`, () => {
    renderRoute(<Route path={POSTS_PAGE_PATH} />, { route: POSTS_PAGE_PATH });

    expect(screen.getByTestId(TEST_ID).children).toHaveLength(PAGE_SIZE);
  });

  it('should load more pages', () => {
    renderRoute(<Route path={POSTS_PAGE_PATH} />, { route: POSTS_PAGE_PATH });

    userEvent.click(getButton('Load more'));

    expect(screen.getByTestId(TEST_ID).children).toHaveLength(PAGE_SIZE * 2);
  });

  it('should disable load more button', () => {
    renderRoute(<Route path={POSTS_PAGE_PATH} />, { route: POSTS_PAGE_PATH });

    userEvent.click(getButton('Load more'));

    expect(getButton('Load more')).toBeDisabled();
  });

  it('should search posts', () => {
    renderRoute(<Route path={POSTS_PAGE_PATH} />, { route: POSTS_PAGE_PATH });

    userEvent.type(getSearch(), posts[0].message);

    expect(screen.getByTestId(TEST_ID).children).toHaveLength(1);
    expect(screen.getByText(new RegExp(posts[0].message))).toBeInTheDocument();
  });

  it('should order oldest posts', () => {
    const defaultPosts = getPostsFixture(5);
    renderRoute(<Route path={POSTS_PAGE_PATH} posts={defaultPosts} />, { route: POSTS_PAGE_PATH });

    userEvent.click(getButton('Oldest'));

    defaultPosts.forEach((post, index) => {
      expect(screen.getByTestId(TEST_ID).children[index]).toEqual(
        screen.getByTestId(post.id),
      );
    });
  });

  it('should order latest posts', () => {
    const defaultPosts = getPostsFixture(5);
    renderRoute(<Route path={POSTS_PAGE_PATH} posts={defaultPosts} />, { route: POSTS_PAGE_PATH });

    userEvent.click(getButton('Latest'));

    defaultPosts.reverse().forEach((post, index) => {
      expect(screen.getByTestId(TEST_ID).children[index]).toEqual(
        screen.getByTestId(post.id),
      );
    });
  });
});
