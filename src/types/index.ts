export type Dictionary<T> = Record<string, T>;

export interface IPost {
  id: string;
  from_name: string;
  from_id: string;
  message: string;
  type: string;
  created_time: string;
}

export interface ISender {
  id: string;
  name: string;
  count: number;
}
