import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarComponent from '../../components/AppBar';
import NavigationComponent from '../../components/Navigation';
import ServeyComponent from '../../components/Servey';
import ConfigurationsComponent from '../../components/Configurations';
import DashboardComponent from '../../components/Servey/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const MaterialComponent = (data) => {
  const classes = useStyles();
  const { toggleNavigation } = data;
  return (
    <div className={`${clsx(classes.content, { [classes.contentShift]: toggleNavigation })} admin-content `}>
      <div className={classes.drawerHeader} />
      <Router>
        <Switch>
          <Route path="/" exact component={ServeyComponent} />
          <Route path="/surveys" exact component={ServeyComponent} />
          <Route path="/configurations" exact component={ConfigurationsComponent} />
          <Route path="/survey/:Id"  component={DashboardComponent} />
        </Switch>
      </Router>
    </div>
  );
};

export default class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleNavigation: true };
  }
  onToggleNavigation = () => {
    const { toggleNavigation } = this.state;
    this.setState({ toggleNavigation: !toggleNavigation });
  };

  render() {
    const { toggleNavigation } = this.state;
    return (
      <div className="admin-wrapper">
        <CssBaseline />
        <AppBarComponent toggleNavigation={toggleNavigation} onToggleNavigation={this.onToggleNavigation} />
        <NavigationComponent toggleNavigation={toggleNavigation} onToggleNavigation={this.onToggleNavigation} />
        <MaterialComponent toggleNavigation={toggleNavigation} />
      </div>
    );
  }
}


