import React, { Component } from 'react';
import UserLanding from './components/UserLanding';
import DataOverview from './components/DataOverview/DataOverview';
import NoticeList from './components/NoticeList/NoticeList';
import Header from './components/Header'

export default class Dashboard extends Component {
  static displayName = 'Dashboard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header></Header>
        <UserLanding />
        <DataOverview />
        <NoticeList />
      </div>
    );
  }
}
