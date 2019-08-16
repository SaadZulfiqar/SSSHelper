import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ProgressComponent from '../../Progress';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const MaterialDialog = (data) => {
  const classes = useStyles();
  const { title, description, openDialog, onToggleDialog, onTitleChange, onDescriptionChange, onCreateServey, pending } = data;

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={openDialog} >
      <DialogTitle id="simple-dialog-title">Create Servey</DialogTitle>
      <DialogContent>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="servey-name"
            label="Enter Servey Name"
            className={classes.textField}
            value={title}
            onChange={onTitleChange}
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="servey-description"
            label="Description"
            multiline
            rowsMax="5"
            value={description}
            onChange={onDescriptionChange}
            className={classes.textField}
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <ProgressComponent pending={pending} />
        <Button variant="contained" color="primary" className={classes.button} onClick={onCreateServey}>Create</Button>
        <Button variant="contained" className={classes.button} onClick={onToggleDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default class ServeyDialogComponent extends Component {
  static propTypes = {
    pending: PropTypes.bool,
    openDialog: PropTypes.bool,
    onToggleDialog: PropTypes.func,
    onCreateServey: PropTypes.func
  };
  
  constructor(props) {
    super(props);
    this.state = { title: '', description: '' };
  }

  onCreateServey = () => {
    this.props.onCreateServey(this.state);
  };

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  componentWillMount() {
    this.setState({ title: '', description: '' });
  }

  render() {
    return (
      <MaterialDialog {...this.props} {...this.state} onTitleChange={this.onTitleChange} onDescriptionChange={this.onDescriptionChange} onCreateServey={this.onCreateServey} />
    );
  }
}