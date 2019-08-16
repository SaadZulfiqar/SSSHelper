import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import SquareEditOutline from '@material-ui/icons/EditOutlined';
import PlayArrow from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import AnswersIcon from '@material-ui/icons/BarChart';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ServeyDialogComponent from './ServeryDialog';
import { fetchServeys, submitServey, toggleServeyDialog } from '../../services/serveys';
import { getServeysPending, getServeys, getServeysError, getToggleServeyDialog } from '../../reducers/serveys';
import ProgressComponent from '../Progress';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        float: "right"
    },
    card: {
        minWidth: 250,
        width: 250,
        float: 'left',
        height: 260,
        marginLeft: 20,
        "&:hover": {
            boxShadow: '0 0 50px 0 rgba(0,0,0,.35)'
        }
    },
    cardbody: {
        height: '85%'
    },
    addsurveycard: {
        minWidth: 250,
        width: 250,
        float: 'left',
        height: 260,
        paddingLeft: 65,
        paddingRight: 65,
        paddingTop: 95,
        paddingBottom: 95,
        textAlign: 'center',
        "&:hover": {
            boxShadow: '0 0 50px 0 rgba(0,0,0,.35)'
        }
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        color: '#32b65a'
    },
    description: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    icon: {
        margin: theme.spacing(1),
        fontSize: 20,
    },
    cardactions: {
        textAlign: 'center',
        padding: 0,
        display: 'block',
        alignItems: 'center'
    },
}));

function CreateSurveyCard(data) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { onToggleDialog } = data;
    return (
        <Card className={classes.addsurveycard}>
            <CardContent>
                <MaterialButton onToggleDialog={onToggleDialog} />
            </CardContent>
        </Card>
    );
}

function SurveyCard(props) {
    const classes = useStyles();
    const survey = props.survey;
    return (
        <Card className={classes.card}>
            <div className={classes.cardbody}>
                <CardContent>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        {survey.Title}
                    </Typography>
                    <Typography className={classes.description} color="textSecondary" gutterBottom>
                        {survey.Description}
                    </Typography>
                </CardContent>
            </div>
            <Divider />
            <CardActions className={classes.cardactions}>
                {/* <Button size="small">Learn More</Button> */}
                <Link to={`/survey/${survey.Id}`}><PlayArrow className={classes.icon} /></Link>
                <Link to={`/survey/${survey.Id}`}><PauseIcon className={classes.icon} /></Link>
                <Link to={`/survey/${survey.Id}`}><AnswersIcon className={classes.icon} /></Link>
                <Link to={`/survey/${survey.Id}`}><SquareEditOutline className={classes.icon} /></Link>
                <Link to={`/survey/${survey.Id}`}><DeleteOutlinedIcon className={classes.icon} /></Link>
            </CardActions>
        </Card>
    );
}

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

    componentWillMount = () => { this.props.fetchServeys(); };
    onToggleDialog = () => this.props.toggleServeyDialog(!this.props.openDialog);
    onCreateServey = (servey) => this.props.submitServey({ Id: new Date().getMilliseconds(), Title: servey.title, Description: servey.description });

    render() {
        const { serveys, pending, openDialog } = this.props;
        return (
            <div>
                <CreateSurveyCard onToggleDialog={this.onToggleDialog} />
                {serveys.map((servey, index) => { return (<SurveyCard key={index} survey={servey} />); })}
                {openDialog && <ServeyDialogComponent {...this.props} onToggleDialog={this.onToggleDialog} onCreateServey={this.onCreateServey} />}
                {pending && <ProgressComponent pending={pending && !openDialog} />}
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