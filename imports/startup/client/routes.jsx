import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';

// import components
import PageNotFound from '../../ui/pages/not-found/PageNotFound.jsx';
import MainLayout from '../../ui/layouts/MainLayout.jsx';
import GridListExampleSimple from '../../ui/component/GridListExampleSimple.jsx';

// Set up all routes in the app
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" components={MainLayout}>
      <Route path="main" components={GridListExampleSimple} />
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
);
