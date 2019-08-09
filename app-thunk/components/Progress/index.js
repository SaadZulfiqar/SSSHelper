import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
}));

const MaterialCircularIndeterminate = () => {
    const classes = useStyles();
    return (
        <div>
            <CircularProgress className={classes.progress} color="secondary" />
        </div>
    );
};

export default class ProgressComponent extends Component {
    static propTypes = {
        pending: PropTypes.bool
    };
    render() {
        const { pending } = this.props;
        return (
            pending ? <MaterialCircularIndeterminate /> : <span />
        );
    }
}