import React from 'react';

import MobileLayout from '../Layout/MobileLayout';

import {
  CreateAccountNav,
  CreateAccount01Body,
  CreateAccount02Body,
  CreateAccount03Body,
  CreateAccount10Body
} from '../../components';


export default class CreateAccounInfo extends React.Component {

  componentTemplate(routerstep, component) {
    return (
      <MobileLayout>
        <CreateAccountNav routerstep={routerstep} />
        { component }
      </MobileLayout>
    );
  }

  renderComponent(param) {
    switch(param) {
      case '1':
        return this.componentTemplate("/",
          <CreateAccount01Body nextRoute="/CreateAccountInfo/2"/>);
      case '2':
        return this.componentTemplate("/CreateAccountInfo/1",
          <CreateAccount02Body nextRoute="/CreateAccountInfo/3" />);
      case '3':
        return this.componentTemplate("/CreateAccountInfo/2",
          <CreateAccount03Body nextRoute="/CreateAccount/1" />);
      case '4':
        return this.componentTemplate("/CreateAccount/6",
          <CreateAccount10Body/>);
      default:
        return this.componentTemplate("/",
          <CreateAccount01Body nextRoute="/CreateAccountInfo/2" />);
    }
  }

  render() {
    return (
      this.renderComponent(this.props.params.id)
    );
  }
}