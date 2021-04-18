import groupBy from 'lodash.groupby';
import { IPost, ISender } from 'types';

export const getSendersList = (data: IPost[] = []): ISender[] => {
  const values = Object.values(groupBy(data, 'from_id'));
  return values.map((posts) => {
    const [{ from_id: id, from_name: name }] = posts;
    return { id, name, posts };
  });
};
