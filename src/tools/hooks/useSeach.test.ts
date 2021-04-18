import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { ISender } from 'types';
import { getSendersFixture } from '__tests__/mocks/fixtures/senders';
import { useSearch } from './useSearch';

describe('useSearch', () => {
  it('should filter search items', () => {
    const senders = getSendersFixture(10);
    const { result } = renderHook(() => useSearch<ISender>(senders, ['name']));

    act(() => result.current.setSearch(senders[1].name));

    expect(result.current.items).toEqual([senders[1]]);
  });

  it('should filter multiple search items', () => {
    const senders = getSendersFixture(4);
    const { result } = renderHook(() => useSearch<ISender>(senders, ['id']));

    act(() => result.current.setSearch('user'));

    expect(result.current.items).toEqual(senders);
  });

  it('should return all items initially', () => {
    const senders = getSendersFixture(5);
    const { result } = renderHook(() => useSearch<ISender>(senders, ['name']));

    expect(result.current.items).toEqual(senders);
  });

  it('should return all items if empty search query', () => {
    const senders = getSendersFixture(10);
    const { result } = renderHook(() => useSearch<ISender>(senders, ['name']));

    act(() => result.current.setSearch(''));

    expect(result.current.items).toEqual(senders);
  });
});
