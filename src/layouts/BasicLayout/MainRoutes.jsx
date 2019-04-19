import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import {adminRouter} from '../../routerConfig';
import Admin from './Admin'
import {connect} from 'react-redux'
import { Dialog } from '@alifd/next';

const jump_to_login=(
                      <Dialog
                    title="请先登录"
                    visible="true">
                    即将跳转到登陆页面
                </Dialog>
                    )

class MainRoutes extends Component {
  /**
   * 渲染路由组件
   */
  constructor(props) {
    super(props);
    this.state={

    }
  }

  componentWillMount(){
    console.log('10')
    let  isAuthenticated =  this.props.token ? true :false;
    this.setState({isAuthenticated:isAuthenticated})
    if(!isAuthenticated){
      const {history} = this.props;
      setTimeout(() => {
        history.replace("/user/login");
      }, 1000)
    }
}
  // renderNormalRoute = (item, index) => {
  //   return item.component ? (
  //     <Route
  //       key={index}
  //       path={item.path}
  //       component={item.component}
  //       exact={item.exact}
  //     />
  //   ) : null;
  // };

  render() {
    console.log('11')
    return this.state.isAuthenticated ? (
      <Switch>
        {/* 渲染路由表 */}
        {/* {adminRouter.map(this.renderNormalRoute)} */}
        <Route exact path='/' component={Admin}/>
        <Route path='/admin' component={Admin}/>
        {/* 根路由默认重定向到 /dashboard */}
        {/* <Redirect from="/" to="/admin" /> */}

        <Redirect to="/user" />

        {/* 未匹配到的路由重定向到 NotFound */}
        <Route component={NotFound} />
      </Switch>
    ):({jump_to_login});
  }
}

const mapStateToProps=(state)=>{
    return {
      token:state.Login.get('token')
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MainRoutes);
