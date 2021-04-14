import React, { FC } from 'react';
import { PublicRoute } from 'routing/components/PublicRoute';
import { Register } from 'pages/Register';
import { LOGIN_PATH, POSTS_LIST_PATH, POSTS_VIEW_PATH } from 'routing/routes';
import { PrivateRoute } from 'routing/components/PrivateRoute';
import { PostsList } from 'pages/PostsList';
import { PostsView } from 'pages/PostsView';
import { Redirect, Router } from '@reach/router';

export const BaseRouting: FC = () => (
  <Router>
    <PublicRoute component={Register} path={LOGIN_PATH} />
    <PrivateRoute component={PostsList} path={POSTS_LIST_PATH} />
    <PrivateRoute component={PostsView} path={POSTS_VIEW_PATH} />
    <Redirect default from="/" to={POSTS_LIST_PATH} noThrow />
  </Router>
);
