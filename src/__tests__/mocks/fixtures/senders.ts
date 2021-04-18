import { ISender } from 'types';

const getSenderFixture = (props?: Partial<ISender>): ISender => ({
  id: 'user_1',
  name: 'Britany Heise',
  count: 10,
  ...props,
});

const getSendersFixture = (length: number = 10): ISender[] => Array.from({ length },
  (_, index) => getSenderFixture({
    id: `user_${index}`,
    name: `Name ${index}`,
    count: index * 10,
  }));

export { getSenderFixture, getSendersFixture };
