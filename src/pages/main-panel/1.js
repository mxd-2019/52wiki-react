import React,{Component} from 'react'
import { BrowserRouter as Router,Route, Redirect,Link } from 'react-router-dom';
import { Nav,Grid} from '@alifd/next';
import IceContainer from '@icedesign/container';
import IceTitle from '@icedesign/title';
import {connect} from 'react-redux'
import {AccountRoutes} from './main-page/routerConfig'
import AccountPanel from './main-page/AccountPanel'

const { Item, SubNav } = Nav;
const { Row, Col } = Grid;


class notes extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='container'>
                <Row>
                    <Col style={styles.cardContainer}>
                        <div style={styles.header}>
                            <div style={{borderRadius:20,background:'yellow',width:40,height:40,float:"left"}}>
                                <img src="#" alt=""/>
                            </div>
                            <span style={{margin:20,fontSize:30}}>{this.props.state.get('user_name')}</span>

                        </div>
                        <div style={styles.nav}>
                            <Nav className="custom-nav" type='normal' direction='hoz' triggerType='click'>
                                <Item><Link to='/admin/pages/1/1/AccountPanel'>管理员信息</Link></Item>
                                <Item>个人空间</Item>
                                <Item>最近活动</Item>
                                <Item>修改密码</Item>
                            </Nav>
                        </div>
                        <div style={styles.content}>
                           {
                                AccountRoutes.map((item,index)=>{
                                    return (
                                        <Route path={item.path} component={item.component}/>
                                    )
                                })
                           } 
                           <Route exact path='/admin/pages/1/1/' component={AccountPanel}/>
                        </div>

                    </Col>
                    
                </Row>
            </div>
                        );
    }
}

const styles = {
    header: {
      height: 60,
      background:'green',
      padding:10,
      paddingLeft:30,
      lineHeight:'40px',
      borderBottom:'2px solid blue'
    },
    nav:{
        height:50,
        background:'red',
        padding:'3px 0'
    },
    content:{
        height:'600px',
        background:'white',
        padding:'30px 10px 10px 10px'
    },
    cardContainer: {
        height: 800,
        width:400,
        margin:10,
        background:'blue',
        borderRadius:5,
        padding:10
    },
    cardContainer_recent: {
        height: 400,
    },
    cardTitle: {
      position: 'relative',
      margin: '0 0 10px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
    },
    more: {
      position: 'absolute',
      right: 0,
      fontSize: '12px',
      color: '#666',
    },
    item: {
      position: 'relative',
      display: 'block',
    },
    itemTime: {
      position: 'absolute',
      top: 6,
      fontSize: '12px',
      textAlign:'right'
    },
    itemTitle: {
      height: '34px',
      lineHeight: '34px',
      fontSize: '13px',
    },
    itemComment: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px',
    },
    commentTitle: {
      height: '28px',
      lineHeight: '28px',
      fontSize: '13px',
    },
    commentTime: {
      fontSize: '12px',
    },
    commentNum: {
      position: 'absolute',
      right: 0,
      top: 6,
      width: '24px',
      height: '24px',
      lineHeight: '24px',
      fontSize: '12px',
      textAlign: 'center',
      borderRadius: '50px',
      background: '#FF2851',
      color: '#fff',
    },
  };

const mapStateToProps=(state)=>{
        return {
            state:state.Login
        }
}

const mapDispatchToProps=(dispatch)=>{

}

export default connect(mapStateToProps,mapDispatchToProps)(notes);