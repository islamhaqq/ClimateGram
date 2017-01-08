// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import { React } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import ../../ui/layouts/main.jsx;

// Import needed templates
// import '../../ui/layouts/body/body.js';
// import '../../ui/pages/home/home.js';
// import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      // <Route path="lists/:id" component={ListPageContainer} />
      // <Route path="signin" component={AuthPageSignIn} />
      // <Route path="join" component={AuthPageJoin} />
      // <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);
