import orderBy from 'lodash.orderby';
import { useState } from 'react';

type OrderType = 'asc' | 'desc';

export const useOrder = <T extends object> (items: Array<T> = [], keys: Array<keyof T>) => {
  const [order, setOrder] = useState<OrderType>('desc');

  return { items: orderBy(items, keys, order), setOrder };
};
