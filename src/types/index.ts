export type Dictionary<T> = Record<string, T>;

export type OrderType = 'asc' | 'desc';

export interface ISender {
  id: string;
  name: string;
  count: number;
}

export interface IPost {
  id: string;
  from_name: string;
  from_id: string;
  message: string;
  type: string;
  created_time: string;
}
