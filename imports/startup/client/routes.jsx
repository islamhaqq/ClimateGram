import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';

// import components
// import PageNotFound from '../../ui/pages/not-found/PageNotFound.jsx';
import MainLayout from '../../ui/layouts/MainLayout.jsx';
import GridListExampleSimple from '../../ui/component/GridListExampleSimple.jsx';

class PageNotFound extends React.Component {
  render() {
    return(
      <div>
        <h1>404: Page Not Found</h1>
      </div>
    )
  }
}
export default PageNotFound

// Set up all routes in the app
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" components={MainLayout}>
      <Route path="*" component={PageNotFound}/>
      <Route path="main" components={GridListExampleSimple} />
    </Route>
  </Router>
);
