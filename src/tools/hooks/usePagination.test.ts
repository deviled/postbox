import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { getPostsFixture } from '__tests__/mocks/fixtures/posts';
import { usePagination } from './usePagination';

describe('usePagination', () => {
  it('should return page items', () => {
    const posts = getPostsFixture(20);
    const { result } = renderHook(() => usePagination(posts, 4));

    expect(result.current.items.length).toBe(4);
  });

  it('should load next page items', () => {
    const posts = getPostsFixture(6);
    const { result } = renderHook(() => usePagination(posts, 5));

    act(() => result.current.nextPage());
    expect(result.current.items.length).toBe(6);
  });

  it('should not load more items if last page', () => {
    const posts = getPostsFixture(10);
    const { result } = renderHook(() => usePagination(posts, 10));

    act(() => result.current.nextPage());

    expect(result.current.items.length).toBe(10);
  });
});
