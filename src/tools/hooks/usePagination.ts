import { useCallback, useState } from 'react';

export const usePagination = <T extends object>(items: Array<T> = [], size = 5) => {
  const [cursor, setCursor] = useState(0);
  const loadMore = useCallback(() => {
    if (items.length > cursor) {
      setCursor((prev) => prev + size);
    }
  }, [items, size]);

  return { loadMore, items: items.slice(0, cursor + size) };
};
