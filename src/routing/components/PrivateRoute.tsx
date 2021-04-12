import React, { ComponentType, FC } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import { LOCAL_STORAGE_TOKEN } from 'tools/auth';
import { LOGIN_PATH } from 'routing/routes';

interface IPrivateRouterProps extends RouteComponentProps {
  component: ComponentType;
}

export const PrivateRoute: FC<IPrivateRouterProps> = ({ component: Component }) => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
  if (token) {
    return <Component />;
  }
  return <Redirect to={LOGIN_PATH} noThrow />;
};
