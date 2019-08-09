import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles(theme => ({
  list: {
    width: '600px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}));

const MaterialDialog = (props) => {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={true} >
      <DialogTitle id="simple-dialog-title">Create Servey</DialogTitle>      
        <form className={classes.container} noValidate autoComplete="off">          
            <TextField
              id="servey-name"
              label="Enter Servey Name"
              className={classes.textField}
              value={''}
              onChange={() => { }}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              style={{ margin: 8 }}
            />
            <TextField
              id="servey-description"
              label="Description"
              multiline
              rowsMax="4"
              value={''}
              onChange={() => { }}
              className={classes.textField}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              style={{ margin: 8 }}
            />         
        </form>     
    </Dialog>
  );
}

export default class ServeyDialogComponent extends Component {
  render() {
    return (
      <MaterialDialog />
    );
  }
}