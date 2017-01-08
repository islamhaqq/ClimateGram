// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from '../../ui/layouts/MainLayout.jsx';
import GridListExampleSimple from '../../ui/component/GridListExampleSimple.jsx';

// Import needed templates
// import '../../ui/layouts/body/body.js';
// import '../../ui/pages/home/home.js';
// import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
export const renderRoutes = () => (
<Router history={browserHistory}>
  <Route path="/" components={MainLayout}>
    <Route path="main" components={GridListExampleSimple} />
  </Route>
</Router>
);
