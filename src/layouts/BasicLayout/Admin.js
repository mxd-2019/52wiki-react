import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import { BrowserRouter as Router,Route, Redirect,Link } from 'react-router-dom';

import {adminRouter} from '../../routerConfig';
import routerdata from '../../pages/main-panel/routerConfig';
import './index.css';
import { Input,Nav,Search,Icon, Balloon } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';
import IceImg from '@icedesign/img';
import {connect} from 'react-redux';
import {isshowchangeAction} from '../../Redux/actionCreactor'

const { Item, SubNav } = Nav;

const header = <span className="fusion">52wiki</span>;



const user_balloon=(
                    <ul>
              <li>
                <Link to="/admin/pages/1/1">
                  <FoundationSymbol type="person" size="small" />
                  我的主页
                </Link>
              </li>
              <li>
                <Link to="/account/settings">
                  <FoundationSymbol type="repair" size="small" />
                  设置
                </Link>
              </li>
              <li>
                <Link to="/user/login">
                  <FoundationSymbol type="compass" size="small" />
                  退出
                </Link>
              </li>
            </ul>
                  )
 
 class Admin extends Component {


   user_login=(
    <div
  className="header-userpannel"
  style={{
    display: 'flex',
    alignItems: 'center',
    width:100,
    float:"right",
    margin:'0 50px 0 100px'
  }}
>
  <IceImg
    height={40}
    width={40}
//                   src={require('./images/avatar.png')}
    style={{background:'blue',margin:5}}
    className="user-avatar"
  />
  <div>
    <span
      // className="user-name"
      style={{ fontSize: '20px' }}
    >
     {this.props.state.login.get('user_name')}
    </span>
  </div>
  <Icon
    type="arrow-down-filling"
    size="xxs"
    className="icon-down"
  />
</div>
    );

  constructor(props){
    super(props)
  }

  switch=()=>{
    const isshow=!this.props.state.CtrPanel_Pages.get('isShow');
    console.log(isshow)
    const action=isshowchangeAction(isshow);
    this.props.isshowchange(action)

  }

  render() {
    const nav=['PAGES','NOTES','CONSOLES']
    const icons=['iconfont icon-pages','iconfont icon-notes','iconfont icon-console']
    return (
      
      <div id='container'>
          <div id="nav">
          <Nav style={{ width: 100,height:'350px' }} defaultOpenAll='true' type='normal'>
            <SubNav style={{height:'30px' }}>
            {nav.map((value,index)=>{
                  return (
                    // <div className='nav_opt' id={index} onClick={this.nav_opt_click}><Link to={routerData[index].path}><i className={icons[index]} style={{'font-size':'50px'}}></i><span style={{display:'block'}}>{value}</span></Link></div>
                    <Item id={index} style={{ height: 80}}>
                    <Link to={adminRouter[index].path}>
                    {/* <div> */}
                    <i className={icons[index]} style={{'font-size':'30px','text-align':'center','width':'80px','display':'block'}}></i>
                    {/* <span style={{display:'block',textAlign: 'center'}}>{value}</span> */}
                    <span style={{display:'block',textAlign: 'center'}}> {value}</span>    
                  
                    {/* </div> */}
                    </Link>
                    </Item>
                    
                  )
              })}
            </SubNav>    
          </Nav>

          <div style={{float:'right',width:50,height:70,textAlign:"center"}}>
              <i class="iconfont icon-fangxiang" style={{fontSize:50}} onClick={this.switch}></i>
          </div>

            
          </div>

              <div id="control-panel" className={this.props.state.CtrPanel_Pages.get('isShow')?'':'hide'}>
                        {/* <Route path="/control-panel/pages" component={Pages}/> */}
                        {
                            adminRouter.map(
                            (item,index)=>{
                              return (
                                <Route path={item.path} component={item.component}/>
                              )
                            }
                          )
                        }
                </div>

                <div id="main-panel" className={this.props.state.CtrPanel_Pages.get('isShow')?'':'shift'}>
                <Nav className="basic-nav" direction="hoz" type="primary" header={header}  defaultSelectedKeys={['home']} triggerType="hover">

                    <Item key="home">
                            <Link to='/admin/pages/1/0'>
                            主页
                            </Link>
                   </Item>
                   <Item key="person">
                            <Link to='/admin/pages/1/1'>
                            个人
                            </Link>
                    </Item>
                    <Item key="concern">
                            <Link to='/admin/pages/1/2'>
                            关注
                            </Link>
                    </Item>
                    <Item key="administration">
                            <Link to='/admin/pages/1/3'>
                            系统管理
                            </Link>
                    </Item>
                      {/* <Item> */}
                      <Search style={{ width: 280,margin:'0 0 0 100px' }} placeholder='Search' shape='simple' />
                      {/* </Item> */}

                    <Balloon trigger={this.user_login}
                    triggerType="hover"
                    align='bl'
                >
                    {user_balloon}
                </Balloon>
                    
                </Nav>
                        {
                          routerdata.map(
                            (item,index)=>{
                              return (
                                <Route path={item.path} component={item.component}/>
                              )
                            }
                          )
                        }

                </div>
      </div>
      
        
    );
  }
}

const mapStateToProps=(state)=>{
    return {
      state:{
        login:state.Login,
        CtrPanel_Pages:state.CtrPanel_Pages
      }
    }
}

const mapDispatchToProps=(dispatch)=>{
  return {
        isshowchange:function(action){
          dispatch(action)
        }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Admin);
