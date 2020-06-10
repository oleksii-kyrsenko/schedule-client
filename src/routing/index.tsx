import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthorizationPage, RegistrationPage } from '../pages';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect exact to='/authorization' />
      </Route>
      <Route exact path='/authorization' component={AuthorizationPage} />
      <Route exact path='/registration' component={RegistrationPage} />
    </Switch>
  );
};
