export interface ISender {
  id: string;
  name: string;
  posts: IPost[];
}

export interface IPost {
  id: string;
  from_name: string;
  from_id: string;
  message: string;
  type: string;
  created_time: string;
}
