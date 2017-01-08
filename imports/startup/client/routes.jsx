import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { ReactDOM } from 'react-dom';

// import components
// import PageNotFound from '../../ui/pages/not-found/PageNotFound.jsx';

class PageNotFound extends React.Component {
  ReactDOM.render() {
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
    <Route>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
);
