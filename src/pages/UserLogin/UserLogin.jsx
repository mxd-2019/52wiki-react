/* eslint react/no-string-refs:0 */
import React, { Component } from "react";
// import BaseComponent from '../../components/BaseComponent'
import { withRouter, Link } from "react-router-dom";
import { Input, Button, Checkbox, Grid, Message } from "@alifd/next";
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError
} from "@icedesign/form-binder";
import IceIcon from "@icedesign/foundation-symbol";
import { ComStr } from "../../Config/ComStr";
import axios from "axios";
import { ok } from "assert";
import {fetchInitData,saveloginAction,inputChange} from '../../Redux/actionCreactor';
import {connect} from 'react-redux'


const { Row, Col } = Grid;

@withRouter
class UserLogin extends Component {
  static displayName = "UserLogin";

  static propTypes = {};

  static defaultProps = {};

  

  constructor(props) {
    super(props);
  }


  handleSubmit = e => {
    e.preventDefault();
    //表单验证
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log("errors", errors);
        return;
      }
      console.log(values)
      // console.log(this.props.token)

      let url = "https://result.eolinker.com/TV6CdYG4f1dcac5bcb1476793906f9fe77d1225aa60e231?uri=/user/login";//接口地址
      
      fetch(url, {
        method: "POST",
        credentials: "same-origin",
        body: values
      })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          //此处data为json格式返回信息，一些列判断之类的操作~
          if (json.status === 200) {
            if(json.data.code===0){
                 //假设判断完成登录非常成功
                 Message.success("登录成功！");
                 //save user_info
                 const action=saveloginAction(json.data.user_info);
                 this.props.savelogininfo(action);
                //页面跳转
                this.props.history.push("/");
            }else if(json.data.code===1){
              Message.error("用户名错误！");
            }else{
              Message.error("密码错误！");
            }
           
          }else{
                Message.error("网络连接错误！");
          }
        })
        .catch(e => Message.error("请求错误：" + e));


    });
  };

  render() {
    return (
      <div className="formContainer">
        <h4 className="formTitle">52wiki</h4>
        <IceFormBinderWrapper
          // onChange={this.props.formChange}
          ref="form"
        > 
          <div className="formItems">
            <Row className="formItem">
              <Col className="formItemCol">
                <IceIcon type="person" size="small" className="inputIcon" />
                <IceFormBinder name="user_name" required message="必填">
                  <Input
                    className="next-input-single"
                    size="large"
                    maxLength={20}
                    placeholder="账户邮箱"
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
                <IceFormBinder name="user_password" required message="必填">
                  <Input
                    className="next-input-single"
                    size="large"
                    htmlType="password"
                    placeholder="账户密码"
                  />
                </IceFormBinder>
              </Col>
              <Col>
                <IceFormError name="password" />
              </Col>
            </Row>
            <Row className="formItem">
              <Button
                type="primary"
                onClick={this.handleSubmit}
                className="submitBtn"
              >
                登 录
              </Button>
            </Row>

            <Row className="tips">
              <Link to="/user/register" className="tips-text">
                立即注册
              </Link>
            </Row>
          </div>
        </IceFormBinderWrapper>
      </div>
    );
  }

}


const mapStateToProps=(state)=>{
  return {
    // state:{
    //       login:state.Login
    // }
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
      savelogininfo:function(action){
          dispatch(action)
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserLogin);
