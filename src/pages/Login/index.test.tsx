import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { screen, renderRoute } from '__tests__/utils';
import { LOGIN_PAGE_PATH } from 'routing/routes';
import userEvent from '@testing-library/user-event';
import * as api from 'api/requests';
import { waitFor } from '@testing-library/dom';
import { serverSetup } from '__tests__/mocks/serverSetup';
import { REGISTER_API_URL } from 'api/routes';
import { rest } from 'msw';
import { getResponse } from '__tests__/mocks/handlers/helpers';
import { ERROR_MESSAGE } from 'tools/constants';
import { Login } from '.';

const NAME = 'test';
const EMAIL = 'test@example.com';

describe('Login.tsx', () => {
  const registerMock = jest.spyOn(api, 'register');
  const getInput = (name: string) => screen.getByRole('textbox', { name });
  const getButton = (name: string) => screen.getByRole('button', { name });

  const Route: FC<RouteComponentProps> = () => (
    <Login />
  );

  const login = () => {
    userEvent.type(getInput('Name'), NAME);
    userEvent.type(getInput('Email'), EMAIL);
    userEvent.click(getButton('Submit'));
  };

  it('should successfully login', async () => {
    serverSetup.use(
      rest.post(REGISTER_API_URL, getResponse({
        body: () => ({ sl_token: '123' }),
      })),
    );
    renderRoute(<Route path={LOGIN_PAGE_PATH} />, { route: LOGIN_PAGE_PATH });

    login();

    await waitFor(() => expect(registerMock).toHaveBeenCalledTimes(1));
    expect(registerMock).toHaveBeenCalledWith({ name: NAME, email: EMAIL });
  });

  it('should not login if error is thrown', async () => {
    serverSetup.use(
      rest.post(REGISTER_API_URL, getResponse({
        body: null,
        status: 500,
      })),
    );

    renderRoute(<Route path={LOGIN_PAGE_PATH} />, { route: LOGIN_PAGE_PATH });

    login();

    expect(await screen.findByText(ERROR_MESSAGE)).toBeVisible();
  });
});
