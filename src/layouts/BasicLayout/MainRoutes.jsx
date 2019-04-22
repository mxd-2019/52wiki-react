import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import {adminRouter} from '../../routerConfig';
import Admin from './Admin'
import {connect} from 'react-redux'
import { Message,Dialog } from '@alifd/next';

                    

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
      }, 5000)
    }
}

  render() {
    console.log('11')
    console.log(this.state.isAuthenticated)
    return this.state.isAuthenticated ? (
      <Switch>
        {/* 渲染路由表 */}
        {/* {adminRouter.map(this.renderNormalRoute)} */}
        <Redirect exact from={['/','/admin']} to="/admin/pages/1/0" />
        {/* <Route exact path='/' component={Admin}/> */}
        <Route path='/admin' component={Admin}/>
        {/* 根路由默认重定向到 /dashboard */}
        {/* <Redirect from="/" to="/admin" /> */}

        {/* <Redirect to="/user"/> */}

        {/* 未匹配到的路由重定向到 NotFound */}
        <Route component={NotFound}/>
      </Switch>
    ):(
      <Dialog
                    title="跳转中"
                    visible='true'>
            即将跳转到登录页面
      </Dialog>
    );
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
