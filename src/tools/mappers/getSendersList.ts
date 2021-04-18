import { Dictionary, IPost, ISender } from 'types';

export const getSendersList = (data: Dictionary<IPost[]> = {}): ISender[] => {
  const posts = Object.values(data);
  return posts.map((senderPosts) => {
    const count = senderPosts.length;
    const [{ from_id: id, from_name: name }] = senderPosts;
    return { id, name, count };
  });
};
