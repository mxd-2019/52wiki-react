/* eslint react/no-string-refs:0 */
import React, { Component } from "react";
import BaseComponent from '../../components/BaseComponent'
import { withRouter, Link } from "react-router-dom";
import { Input, Button, Grid, Message } from "@alifd/next";
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError
} from "@icedesign/form-binder";
import IceIcon from "@icedesign/foundation-symbol";
import DynamicIcon from '@icedesign/dynamic-icon';

const { Row, Col } = Grid;

const CustomIcon = DynamicIcon.create({
  fontFamily: 'iconfont',
  prefix: 'icon',
  css: '//at.alicdn.com/t/font_1132692_6bt2kq43pub.css', 
});

@withRouter
class UserRegister extends BaseComponent {
  static displayName = "UserRegister";

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name:"",
        email: "",
        verifycode: "",
        passwd: "",
        rePasswd: ""
      }
    };
  }

  checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback("请输入正确的密码");
    } else if (values.length < 8) {
      callback("密码必须大于8位");
    } else if (values.length > 16) {
      callback("密码必须小于16位");
    } else {
      callback();
    }
  };

  checkPasswd2 = (rule, values, callback, stateValues) => {
    if (!values) {
      callback("请输入正确的密码");
    } else if (values && values !== stateValues.passwd) {
      callback("两次输入密码不一致");
    } else {
      callback();
    }
  };

  // formChange = value => {
  //   // this.setState({
  //   //   value
  //   // });
  // };

  nameAjax=()=>{
      console.log(this.state.value.name)
      const url=""
      fetch(url,{
        method: 'post',
        body: this.state.value.name,
    }).then(res=>res.json()).then(json=> {
        if (json.status === 200) {
            if(json.data.code===0){
              console.log("用户名可用！")
              Message.success('用户名可用!');
            }else{
              Message.error('用户名已存在!');
            }
            
        }else {
            console.log("网络连接出错!");
            Message.error('网络连接出错!');
        }

        })
  }

  mailAjax=()=>{

    const url=""

      fetch(url,{
        method: 'post',
        body: this.state.value.name,
    }).then(res=>res.json()).then(json=> {
        if (json.status === 200) {
            if(json.data.code===0){
              console.log("邮箱未注册！")
              Message.success('邮箱未注册！');
            }else{
              Message.error('邮箱已注册！');
            }
            
        }else {
            console.log("网络连接出错!");
            Message.error('网络连接出错!');
        }

        })
    
  }

  handleSubmit = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log("errors", errors);
        return;
      }

      // 注册逻辑
    let url = "";//接口地址
 
    // let regData = new FormData();
    // regData.append('c','register');
    // regData.append('username', this.state.username);
    // regData.append('password', this.state.passwd);
    // regData.append('email', this.state.email);
    // regData.append('client', 'chrome');
    
    fetch(url,{
        method: 'post',
        body: values,
    }).then(res=>res.json()).then(json=> {
        if (json.status === 200) {
            if(json.data.code===0){
              console.log("Success to register!")
              Message.success('注册成功!');
              // this.props.history.push("/#/user/login");
            }
            
        }else {
            console.log("Fail to register!");
            Message.error('网络连接失!');
        }

        })
        

      
    });
  };

  render() {
    console.log('1')
    return (
      <div className="user-register">
        <div className="formContainer">
          <h4 className="formTitle">注 册</h4>
          <IceFormBinderWrapper
            // value={this.state.value}
            // onChange={this.formChange}
            ref="form"
          >
            <div className="formItems">
              <Row className="formItem">
                <Col className="formItemCol">
                  <IceIcon type="person" size="small" className="inputIcon" />
                  <IceFormBinder
                    name="name"
                    required
                    message="请输入正确的用户名"            
                  >
                    <Input
                      className="next-input-single"
                      size="large"
                      placeholder="用户名"
                      onBlur={this.nameAjax}
                    />     
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="name" />
                </Col>
              </Row>

              <Row className="formItem">
                <Col className="formItemCol">
                  <IceIcon type="mail" size="small" className="inputIcon" />
                  <IceFormBinder
                    type="email"
                    name="email"
                    required
                    message="请输入正确的邮箱"
                  >
                    <Input
                      className="next-input-single"
                      size="large"
                      maxLength={20}
                      placeholder="邮箱"
                      onBlur={this.mailAjax}
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="email" />
                </Col>
              </Row>

              <Row className="formItem">
                <Col className="formItemCol">
                  <IceIcon type="lock" size="small" className="inputIcon" />
                  <IceFormBinder
                    name="passwd"
                    required
                    validator={this.checkPasswd}
                  >
                    <Input
                      className="next-input-single"
                      htmlType="password"
                      size="large"
                      placeholder="至少8位密码"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="passwd" />
                </Col>
              </Row>

              <Row className="formItem">
                <Col className="formItemCol">
                  <IceIcon type="lock" size="small" className="inputIcon" />
                  <IceFormBinder
                    name="rePasswd"
                    required
                    validator={(rule, values, callback) =>
                      this.checkPasswd2(
                        rule,
                        values,
                        callback,
                        this.state.value
                      )
                    }
                  >
                    <Input
                      className="next-input-single"
                      htmlType="password"
                      size="large"
                      placeholder="确认密码"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="rePasswd" />
                </Col>
              </Row>

              <Row className="formItem">
                <Button
                  type="primary"
                  onClick={this.handleSubmit}
                  className="submitBtn"
                >
                  注 册
                </Button>
              </Row>

              <Row className="tips">
                <Link to="/user/login" className="tips-text">
                  使用已有账户登录
                </Link>
              </Row>
            </div>
          </IceFormBinderWrapper>
        </div>
      </div>
    );
  }
}

export default UserRegister;
