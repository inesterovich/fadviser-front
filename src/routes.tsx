import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthPage } from './pages/Auth/Auth.page';
import { DashBoardPage } from './pages/Dashboard/Dashboard.page';

export const useRoutes = (isAuthenticated: boolean) => {

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
