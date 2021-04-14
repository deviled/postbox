import { Dictionary, IPost, ISender } from 'types';

export const getSenderList = (data: Dictionary<IPost[]> = {}): ISender[] => {
  const postsBySender = Object.values(data);
  return postsBySender.map((posts) => {
    const count = posts.length;
    const [{ from_id: id, from_name: name }] = posts;
    return { id, name, count };
  });
};
