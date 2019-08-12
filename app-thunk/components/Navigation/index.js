import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  list: { width: 250 },
  fullList: { width: 'auto' },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
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
  }
}));


const MaterialDrawer = (data) => {
  const { toggleNavigation, onToggleNavigation } = data;
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Drawer open={toggleNavigation} className={classes.drawer} variant="persistent" anchor="left" classes={{ paper: classes.drawerPaper }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={onToggleNavigation}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <div className={classes.list} role="presentation" >
          <List>
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Serveys" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Configurations" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </div>

      </Drawer>
    </div>

  );
}

export default class DrawerComponent extends Component {
  static propTypes = {
    toggleNavigation: PropTypes.bool,
    onToggleNavigation: PropTypes.func
  };
  render() {
    return (
      <MaterialDrawer {...this.props} />
    );
  }
}