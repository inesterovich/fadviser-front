import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthPage } from './modules/user-modules/Auth/Auth.page';
import { DashBoardPage } from './modules/user-modules/Dashboard/Dashboard.page';
import { useAppSelector } from './hooks/redux.hooks';

export const useRoutes = () => {

  const isAuthenticated = !!useAppSelector(state => state.authorization.authData?.token);
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/dashboard">
          <DashBoardPage />
        </Route>
        <Redirect to="/dashboard" />

      </Switch>
    )
  }
  
  return (
    <Switch>
      <Route path="/" exact >
      <AuthPage />
      </Route>
      <Redirect to="/" />

    </Switch>
  )
}
