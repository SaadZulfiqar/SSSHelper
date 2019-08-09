import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import AppBarComponent from '../../components/AppBar';
import NavigationComponent from '../../components/Navigation';
import ServeyDialogComponent from '../../components/ServeryDialog';

export default class AdminContainer extends Component {
  state = {}
  render() {
    return (
        <div>
          <div>
            <AppBarComponent />
          </div>
          <div>
            {/* <NavigationComponent /> */}
          </div> 
          <ServeyDialogComponent />
        </div>
    );
  }
}


