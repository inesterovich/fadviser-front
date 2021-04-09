import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthPage } from './modules/user-modules/Auth/Auth.page';
import { DashBoardPage } from './modules/user-modules/Dashboard/Dashboard.page';
import { ProfilePage } from './modules/user-modules/Profile/Profile.page';

import { AccountsPage } from './modules/app-modules/Accounting/Accounts/Accounts.page';
import { AccountDetailPage } from './modules/app-modules/Accounting/AccountDetail/AccountDetail.page';
import { BudgetPage } from './modules/app-modules/Budget/Budget.page';
import { DebtPage } from './modules/app-modules/Debt/Debt.page';
import { IncomeCapPage } from './modules/app-modules/IncomeCap/IncomeCap.page';
import { MoneyLifePage } from './modules/app-modules/MoneyLife/MoneyLife.page';
import { ReportsPage } from './modules/app-modules/Reports/Reports.page';
import { useAppSelector } from './hooks/redux.hooks';

export const useRoutes = () => {

  const isAuthenticated = !!useAppSelector(state => state.authorization.authData?.token);
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <DashBoardPage />
        </Route>
        <Route path="/accounts" exact>
          <AccountsPage />
        </Route>
        <Route path="/accounts/:accountId">
          <AccountDetailPage />
        </Route>
        <Route path="/budget" exact>
          <BudgetPage />
        </Route>
        <Route path="/debt" exact>
          <DebtPage />
        </Route>
        <Route path="/incomecap" exact>
          <IncomeCapPage />
        </Route>
        <Route path="/money-life" exact>
          <MoneyLifePage />
        </Route>
        <Route path="/reports" exact>
          <ReportsPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Redirect to="/"/>

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
