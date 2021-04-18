import { useMemo, useState } from 'react';

export const useSearch = <T extends object> (items: Array<T>, keys: Array<keyof T>) => {
  const [search, setSearch] = useState<string>('');

  const filtered = useMemo(() => items.filter((item) => {
    const match = keys.map((key) => item[key]?.toString().includes(search));
    return match.filter(Boolean).length;
  }), [items, keys, search]);

  return { items: filtered, setSearch };
};
