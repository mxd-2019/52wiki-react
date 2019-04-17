import React,{Component} from 'react';
import { Switch, Route, Redirect,Link } from 'react-router-dom';
import './control-panel.css';
// import store from '../../Redux/store'
import {connect} from 'react-redux'
import {is} from 'immutable';
import { Input,Nav,Search } from '@alifd/next';
// import {Balloon, Icon} from '@alifd/next';
// import {IceTitle} from '@icedesign/title';

import routerData from '../main-panel/routerConfig';
import {inputchangeAction,headerchangeAction} from '../../Redux/actionCreactor'

const { Item, SubNav } = Nav;

const headers_back=['管理员主页面','个人','关注','系统-动态面板','系统-用户管理-删除']
const headers_front=['登录页面','注册页面','忘记密码','修改密码']


class pages extends Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        
        this.state={
            back:headers_back,
            front:headers_front
        }
    }

    search=()=>{
        const input=this.props.state.get('input')
        const newback=[]
        const newfront=[]
        
        headers_back.map((item,index)=>{
            if(item.search(input)!==-1){
                newback.push(item)
            }
        })
        
        headers_front.map((item,index)=>{
            if(item.search(input)!==-1){
                newfront.push(item)
            }
        })

        this.setState({
            back:newback,
            front:newfront
        })
    }


    render() {
        console.log('1')
        return (
            <div >
                <div className='header'>
                <span id='title'>
                    <span>PAGES</span>
                    
                    <span style={{fontWeight:'bold'}}>{this.props.state.get('header')}</span>
                </span>
                                {/* <IceTitle 
                            text="主标题"
                            subtitle="副标题"
                            link="http://www.taobao.com"
                            decoration={true}
                        /> */}
                
                </div>
                <div className="input">
                    <Search style={{ width: 280 }} placeholder='Search' shape='simple' onSearch={()=>this.search()} onChange={(e)=>this.props.inputChange(e)} />
                </div>
                <div className="content">
                <Nav style={{ width: 300 }} defaultOpenAll='true' type='normal'>
                    <SubNav label="后台管理">
                            <SubNav label="系统管理员主页面">
                                {this.state.back.map((item,index)=>{
                                    return (<Item onClick={()=>this.props.showHeader(item)}>
                                            <Link to={routerData[index].path}>
                                            <i className='iconfont icon-wenjian' style={{'font-size':'15px'}}></i>   {item}
                                            </Link></Item>)
                                })}
                            </SubNav>
                    </SubNav>
                    <SubNav label="用户前端页面管理">
                                {this.state.front.map((item,index)=>{
                                    return (<Item onClick={()=>this.props.showHeader(item)}>
                                                <Link to={routerData[index+5].path}>
                                                <i className='iconfont icon-wenjian' style={{'font-size':'15px'}}></i>   {item}
                                                </Link>
                                            </Item>)
                                })}
                                
                    </SubNav>  
                </Nav>
                </div>
            </div>
                        );
    }
}

const mapStateToProps=(state)=>{
    
    console.log(state.CtrPanel_Pages)
    return {
        state:state.CtrPanel_Pages
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        search:(e)=>{
            const action=inputchangeAction(e)
            dispatch(action)
        },
        inputChange:(e)=>{
            console.log(e)
            const action=inputchangeAction(e)
            dispatch(action)
        },
        showHeader:(e)=>{
            console.log(e)
            const action=headerchangeAction(e)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(pages);