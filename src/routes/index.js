import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListViewPage from '../views/ListViewPage';

const Routes = () => (
  <Switch>
      <Route
          path="/"
          exact
          component={ListViewPage}
      />
  </Switch>
);

export default Routes;
