import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import { BrowserRouter as Router,Route, Redirect,Link } from 'react-router-dom';

import {adminRouter} from '../../routerConfig';
import routerdata from '../../pages/main-panel/routerConfig';
import './index.css';
import { Input,Nav,Search } from '@alifd/next';

const { Item, SubNav } = Nav;

const header = <span className="fusion">52wiki</span>;
const footer = <a className="login-in" href="/#/user/login">Login in</a>;

import Test from '../../pages/main-panel/0'


const user_login=(
                  <div
                className="ice-design-header-userpannel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12,
                }}
              >
                <IceImg
                  height={40}
                  width={40}
//                   src={require('./images/avatar.png')}
                  className="user-avatar"
                />
                <div className="user-profile">
                  <span
                    className="user-name"
                    style={{ fontSize: '13px', color: '#666' }}
                  >
                    淘小宝
                  </span>
                  <br />
                  <span className="user-department">技术部</span>
                </div>
                <Icon
                  type="arrow-down-filling"
                  size="xxs"
                  className="icon-down"
                />
              </div>
                  )
const user_balloon=(
                    <ul>
              <li className="user-profile-menu-item">
                <Link to="/admin/pages/1/1">
                  <FoundationSymbol type="person" size="small" />
                  我的主页
                </Link>
              </li>
              <li className="user-profile-menu-item">
                <Link to="/account/settings">
                  <FoundationSymbol type="repair" size="small" />
                  设置
                </Link>
              </li>
              <li className="user-profile-menu-item">
                <Link to="/user/login">
                  <FoundationSymbol type="compass" size="small" />
                  退出
                </Link>
              </li>
            </ul>
                  )
 
export default class Admin extends Component {

  constructor(){
    super()
  }
  // nav_opt_click=(e)=>{
  //   // onClick={(e)=>this.nav_opt_click(e)}
  //   const nodes=e.currentTarget.parentNode.parentNode.parentNode.childNodes
  //   // console.log(nodes)
  //   const items=Array.prototype.slice.call(nodes,0)
  //   console.log(items)
  //   items.map((item,index)=>{
  //     console.log(item.firstChild.firstChild)
  //       item.firstChild.firstChild.setAttribute('class',' ')
  //   })
  //   e.currentTarget.setAttribute('class','nav_opt_click')
  //   // this.props.history.push("/control-panel/pages");
  // }

  render() {
    const nav=['PAGES','NOTES','CONSOLES']
    const icons=['iconfont icon-pages','iconfont icon-notes','iconfont icon-console']
    return (
      
      <div id='container'>
          <div id="nav">
          <Nav style={{ width: 100,height:'100vh' }} defaultOpenAll='true' type='normal'>
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

            
          </div>

              <div id="control-panel">
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

                <div id="main-panel">
                <Nav className="basic-nav" direction="hoz" type="primary" header={header} footer={footer} defaultSelectedKeys={['home']} triggerType="hover">
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
                    
                    <Balloon trigger={user_login}
                    triggerType="hover"
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
