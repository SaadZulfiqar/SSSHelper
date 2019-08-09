import React, { Component } from 'react';
import AppBarComponent from '../../components/AppBar';
import NavigationComponent from '../../components/Navigation';
import ServeyComponent from '../../components/Servey';

export default class AdminContainer extends Component {
  render() {
    return (
        <div>
          <AppBarComponent />   
          {/* <NavigationComponent /> */}     
          <ServeyComponent /> 
        </div>
    );
  }
}


