import React from "react";
// import { Router, Route, Switch } from "react-router-dom";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

// import { Router } from '@reach/router';
import { routerPath } from "./Routerlist";

import Homepage from 'views/Homepage'
import NewsDetail from 'views/News/Detail'
import PurchaseHistory from 'views/Purchase/History'
import SignIn from 'views/Signin'


var browserHistory = createBrowserHistory();
const RouterPath = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          path={routerPath.signin.root}
          component={SignIn}
          default
          exact
        />
        <Route
          path={routerPath.homepage.root}
          component={Homepage}
          exact
        />
        <Route
          path={routerPath.news.detail}
          component={NewsDetail}
          exact
        />
        <Route
          path={routerPath.purchase.history}
          component={PurchaseHistory}
          exact
        />
      </Switch>
    </Router>
  )
}

export default RouterPath
