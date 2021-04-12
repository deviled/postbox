import React, { FC } from 'react';
import { PublicRoute } from 'routing/components/PublicRoute';
import { Login } from 'pages/Login';
import { LOGIN_PATH, POSTS_LIST_PATH } from 'routing/routes';
import { Posts } from 'components/layouts/Posts';
import { PrivateRoute } from 'routing/components/PrivateRoute';
import { PostsList } from 'pages/PostsList';
import { PostsListView } from 'pages/PostsListView';
import { Redirect, Router } from '@reach/router';

export const BaseRouting: FC = () => (
  <Router>
    <PublicRoute component={Login} path={LOGIN_PATH} />
    <Posts path={POSTS_LIST_PATH}>
      <PrivateRoute component={PostsList} path="/" />
      <PrivateRoute component={PostsListView} path=":id" />
    </Posts>
    <Redirect default from="/" to={POSTS_LIST_PATH} noThrow />
  </Router>
);
