import { IPost } from 'types';

const getPostFixture = (props?: Partial<IPost>): IPost => ({
  id: 'post_1',
  from_id: 'user_4',
  from_name: 'Britany Heise',
  message: 'initiative bury oak tired bracket habitat save grow desert credit card business product connection master boy respectable sweet depression',
  type: 'status',
  created_time: '2020-11-13T12:02:04+00:00',
  ...props,
});

const getPostsFixture = (length: number = 10): IPost[] => Array.from({ length },
  (_, index) => getPostFixture({
    id: `post_${index}`,
    from_id: `user_${index}`,
    from_name: `Name ${index}`,
    created_time: new Date(index * 86400000).toISOString(),
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ${index}.`,
  }));

export { getPostFixture, getPostsFixture };
