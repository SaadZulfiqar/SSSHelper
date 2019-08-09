import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  list: { width: 250 },
  fullList: {  width: 'auto' },
}));


const MaterialDrawer = () => {
  const classes = useStyles();
  const sideList = side => (
    <div className={classes.list} role="presentation" >
      <List>
         <ListItem button>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={'Inbox'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={'Inbox'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={'Inbox'} />
          </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={'Inbox'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div> <Drawer open={true}>{sideList('left')} </Drawer> </div>
  );
}

export default class DrawerComponent extends Component { 
    render() {
        return (
          <MaterialDrawer />
        );
      }
}