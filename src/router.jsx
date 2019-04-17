/**
 * 定义应用路由
 */
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import UserLayout from './layouts/UserLayout/index';
import BasicLayout from './layouts/BasicLayout/MainRoutes';
import {Provider} from 'react-redux'
import store from './Redux/store'
import MainRoutes from './layouts/BasicLayout/MainRoutes'

// 按照 Layout 分组路由
// UserLayout 对应的路由：/user/xxx
// BasicLayout 对应的路由：/xxx
const router = () => {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
            <Route path="/user" component={UserLayout} />
            <Route exact path={['/admin/*','/']} component={MainRoutes} />
        </Provider>
        
      </Switch>
    </Router>
  );
};

export default router();
