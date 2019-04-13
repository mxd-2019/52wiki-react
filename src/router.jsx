/**
 * 定义应用路由
 */
import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";
import UserLayout from "./layouts/UserLayout";
import BasicLayout from "./layouts/BasicLayout";
import {Provider} from 'react-redux'
import store from './Redux/store'
// 按照 Layout 分组路由
// UserLayout 对应的路由：/user/xxx
// BasicLayout 对应的路由：/xxx
const router = () => {
  return (
  
      <HashRouter>
      <Switch>
      <Provider store={store}>
        <Route path="/user" component={UserLayout} />
        <Route path="/" component={BasicLayout} />
      </Provider>
      </Switch>
    </HashRouter>
 
    
  );
};

export default router();
