import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { getSendersFixture } from '__tests__/mocks/fixtures/senders';
import { screen, renderRoute } from '__tests__/utils';
import userEvent from '@testing-library/user-event';
import { POSTS_PAGE_PATH, SENDER_PAGE_PATH } from 'routing/routes';
import { SendersList } from '.';

const TEST_ID = 'senders-list';
const SENDER_ID = 'user_4';
const ITEMS_LENGTH = 20;

describe('SendersList.tsx', () => {
  const getSearch = () => screen.getByRole('textbox');
  const senders = getSendersFixture(ITEMS_LENGTH);

  const Route: FC<RouteComponentProps> = () => (
    <SendersList senders={senders} />
  );

  it('should have rendered items', () => {
    renderRoute(<Route path={POSTS_PAGE_PATH} />, { route: POSTS_PAGE_PATH });

    expect(screen.getByTestId(TEST_ID).children).toHaveLength(ITEMS_LENGTH);
  });

  it('should search senders', async () => {
    renderRoute(<Route path={POSTS_PAGE_PATH} />, { route: POSTS_PAGE_PATH });

    userEvent.type(getSearch(), senders[0].name);

    expect(screen.getByTestId(TEST_ID).children).toHaveLength(1);
    expect(screen.getByText(new RegExp(senders[0].name))).toBeInTheDocument();
  });

  it('should navigate to sender', async () => {
    renderRoute(<Route path={POSTS_PAGE_PATH} />, { route: POSTS_PAGE_PATH });

    userEvent.click(screen.getByTestId(SENDER_ID));

    expect(window.location.pathname).toBe(SENDER_PAGE_PATH.replace(':id', SENDER_ID));
  });
});
