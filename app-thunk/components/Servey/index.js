import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ServeyDialogComponent from './ServeryDialog';
import { fetchServeys, submitServey, toggleServeyDialog } from '../../services/serveys';
import { getServeysPending, getServeys, getServeysError, getToggleServeyDialog } from '../../reducers/serveys';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    }
}));

const MaterialButton = (props) => {
    const classes = useStyles();
    const { onToggleDialog } = props;
    return (
        <Button variant="contained" color="primary" className={classes.button} onClick={onToggleDialog}>Create</Button>
    );
}

class ServeyComponent extends Component {
    static propTypes = {
        error: PropTypes.string,
        serveys: PropTypes.array,
        pending: PropTypes.bool,
        fetchServeys: PropTypes.func,
        openDialog: PropTypes.bool,
        getToggleServeyDialog: PropTypes.func
    };
    constructor(props) {
        super(props);
    }

    onToggleDialog = () => this.props.toggleServeyDialog(!this.props.openDialog);
    onCreateServey = (servey) => this.props.submitServey({ Id: new Date().getMilliseconds(), Title: servey.title, Description: servey.description });;

    render() {
        console.log('############# SERVEYS ################');
        console.log(this.props);
        return (
            <div>
                <MaterialButton onToggleDialog={this.onToggleDialog} />
                <ServeyDialogComponent {...this.props} onToggleDialog={this.onToggleDialog} onCreateServey={this.onCreateServey} />                
            </div>
        );
    }
}


const mapStateToProps = state => ({
    error: getServeysError(state),
    serveys: getServeys(state),
    pending: getServeysPending(state),
    openDialog: getToggleServeyDialog(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchServeys: fetchServeys,
    submitServey: submitServey,
    toggleServeyDialog: toggleServeyDialog
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServeyComponent);