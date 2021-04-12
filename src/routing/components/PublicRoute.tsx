import React, { ComponentType, FC } from 'react';
import { RouteComponentProps } from '@reach/router';

interface IPublicRouteProps extends RouteComponentProps {
  component: ComponentType;
}

export const PublicRoute: FC<IPublicRouteProps> = ({ component: Component }) => (
  <Component />
);
