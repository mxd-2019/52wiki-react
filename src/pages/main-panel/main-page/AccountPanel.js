import React, { Component } from 'react';
import Container from '@icedesign/container';
import { Button, Dialog, Input, Upload } from '@alifd/next';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';
import {connect} from 'react-redux'

 class AccountPanel extends Component {
  static displayName = 'AccountPanel';

  constructor(props) {
    super(props);
    this.state = { open: false ,
            value:{}
    };
  }

  handleOpenEditPanel = () => {
    this.setState({ open: true });
  };

  handleCloseEditPanel = () => {
    this.setState({ open: false });
  };

  formChange = (value) => {
    console.log(value);
    this.setState({value:value})
  };

  submitEdit=()=>{
    console.log(this.state.value)
  }



  render() {
    return (
      <Container>
        <div style={styles.header}>
          <h2 style={styles.title}>账号信息</h2>
          <div>
            <Button onClick={this.handleOpenEditPanel} type="primary">
              修改
            </Button>
          </div>
        </div>
        <div style={styles.infoRow}>
          <div style={styles.infoLabel}>账号类型</div>
          <div style={styles.infoDetail}>管理员</div>
        </div>
        <div style={styles.infoRow}>
          <div style={styles.infoLabel}>账号头像</div>
          <div style={styles.infoDetail}>
            <img src={this.props.state.login.get('avatar')} style={{ width: 120 }} />
          </div>
        </div>
        <div style={styles.infoRow}>
          <div style={styles.infoLabel}>账号名称</div>
          <div style={styles.infoDetail}>好名字都起不到啦</div>
        </div>
        <div style={styles.infoRow}>
          <div style={styles.infoLabel}>邮箱</div>
          <div style={styles.infoDetail}>
            253*****25@qq.com
          </div>
        </div>
        <div style={styles.infoRow}>
          <div style={styles.infoLabel}>账号简介</div>
          <div style={styles.infoDetail}>这个家伙很懒什么都没有留下</div>
        </div>
        <Dialog
          visible={this.state.open}
          onOk={this.submitEdit}
          onClose={this.handleCloseEditPanel}
          onCancel={this.handleCloseEditPanel}
          title="修改账户信息"
        >
          <FormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
          >
            <div>
              <div style={styles.fromItem}>
                <span>账号名称：</span>
                <FormBinder name="name" required max={10} message="不能为空">
                  <Input style={{ width: 500 }} />
                </FormBinder>
              </div>
              <FormError style={{ marginLeft: 10 }} name="name" />
              <div style={styles.fromItem}>
                <span>账号头像：</span>
                <FormBinder name="avatar" required max={10} message="不能为空">
                  <Input style={{ width: 500 }} />
                </FormBinder>
              </div>
              <FormError style={{ marginLeft: 10 }} name="avatar" />
              <div style={styles.fromItem}>
                <span>邮箱地址：</span>
                <FormBinder name="email" required max={10} message="不能为空">
                  <Input style={{ width: 500 }} />
                </FormBinder>
              </div>
              <FormError style={{ marginLeft: 10 }} name="email" />
              <div style={styles.fromItem}>
                <span>账号简介：</span>
                <FormBinder name="desc" required max={200} message="不能为空">
                  <Input.TextArea
                    hasLimitHint
                    maxLength={200}
                    style={{ width: 500 }}
                  />
                </FormBinder>
              </div>
              <FormError style={{ marginLeft: 10 }} name="desc" />
            </div>
          </FormBinderWrapper>
        </Dialog>
      </Container>
    );
  }
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    margin: 0,
    paddingBottom: 20,
  },
  infoRow: {
    padding: '16px 0',
    display: 'flex',
    borderBottom: '1px solid #f6f6f6',
  },
  infoLabel: {
    flex: '0 0 100px',
    color: '#999',
  },
  infoDetail: {},

  fromItem: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
};

const mapStateToProps=(state)=>{
    return {
      state:{
        login:state.Login
      }
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountPanel);