import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ServeyDialogComponent from './ServeryDialog';
import { fetchServeys, submitServey, toggleServeyDialog } from '../../services/serveys';
import { getServeysPending, getServeys, getServeysError, getToggleServeyDialog } from '../../reducers/serveys';
import ProgressComponent from '../Progress';

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
}));

function CreateSurveyCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.addsurveycard}>
        <CardContent>
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be
            {bull}
            nev
            {bull}o{bull}
            lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          <Typography color="textSecondary">
            Add Survey
          </Typography>
        </CardContent>
      </Card>
    );
}

function SurveyCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    console.log(props.survey)
    const survey = props.survey;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            {survey.Title}
          </Typography>
          <Typography className={classes.description} color="textSecondary" gutterBottom>
            {survey.Description}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
        <Divider />
        <div>test</div>
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

    componentWillMount = () => {
        this.props.fetchServeys();
    };
    onToggleDialog = () => this.props.toggleServeyDialog(!this.props.openDialog);
    onCreateServey = (servey) => this.props.submitServey({ Id: new Date().getMilliseconds(), Title: servey.title, Description: servey.description });;

    render() {
        console.log('############# SERVEYS ################');

        const { serveys, pending } = this.props;
        console.log(serveys);
        return (
            <div>
                <ProgressComponent pending={pending} />
                <MaterialButton onToggleDialog={this.onToggleDialog} />
                <CreateSurveyCard />
                {
                    serveys.map((servey, index) => {
                        return (
                            // <span>
                            //     <label key={index}>{servey.Title}</label>
                            //     <br />
                            // </span>
                            <SurveyCard survey={servey} />
                        );
                    })
                }
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