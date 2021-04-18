import React, { FC } from 'react';
import { PublicRoute } from 'routing/components/PublicRoute';
import { Login } from 'pages/Login';
import { LOGIN_PAGE_PATH, POSTS_PAGE_PATH, SENDER_PAGE_PATH } from 'routing/routes';
import { PrivateRoute } from 'routing/components/PrivateRoute';
import { Posts } from 'pages/Posts';
import { Sender } from 'pages/Sender';
import { Redirect, Router } from '@reach/router';

export const BaseRouting: FC = () => (
  <Router>
    <PublicRoute component={Login} path={LOGIN_PAGE_PATH} />
    <PrivateRoute component={Posts} path={POSTS_PAGE_PATH} />
    <PrivateRoute component={Sender} path={SENDER_PAGE_PATH} />
    <Redirect default from="/" to={POSTS_PAGE_PATH} noThrow />
  </Router>
);
