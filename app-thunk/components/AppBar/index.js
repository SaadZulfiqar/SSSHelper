import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MaterialAppBar = (data) => {
  const classes = useStyles();
  const { toggleNavigation, onToggleNavigation } = data;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: toggleNavigation })}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onToggleNavigation}><MenuIcon /></IconButton>
          <Typography variant="h6" className={classes.title}>
            Serveys
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default class AppBarComponent extends Component {
  static propTypes = {
    toggleNavigation: PropTypes.bool,
    onToggleNavigation: PropTypes.func
  };
  render() {
    return (
      <MaterialAppBar {...this.props} />
    );
  }
}