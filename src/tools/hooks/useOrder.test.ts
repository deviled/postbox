import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { getPostsFixture } from '__tests__/mocks/fixtures/posts';
import { IPost } from 'types';
import { useOrder } from './useOrder';

describe('useOrder', () => {
  it('should order latest posts', () => {
    const posts = getPostsFixture(3);
    const { result } = renderHook(() => useOrder<IPost>(posts, ['created_time']));

    act(() => result.current.setOrder('desc'));

    expect(result.current.items).toEqual(posts.reverse());
  });

  it('should order oldest posts', () => {
    const posts = getPostsFixture(5);
    const { result } = renderHook(() => useOrder<IPost>(posts, ['created_time']));

    act(() => result.current.setOrder('asc'));

    expect(result.current.items).toEqual(posts);
  });
});
